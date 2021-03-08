import { Component, QueryList, ViewChildren } from '@angular/core';
import { Task } from '../models/task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class ToDoListComponent {
  @ViewChildren(TaskComponent)
  taskList: QueryList<TaskComponent>;

  todoList = [];
  task : Task;
  selectedTask : Task;
  taskID = 1;

  constructor() {
    this.task = new Task();
  }

  addTask() {
    this.task.id = this.taskID++;
    this.todoList.push(this.task);
    this.task = new Task();

    //clear selected task
    this.selectTaskComponent(null);
  }

  deleteTask(task) {
    let index = this.todoList.findIndex( item => item.id === task.id);
    if(index >= 0 ) 
      this.todoList.splice(index, 1);

    //clear selected task
    this.selectTaskComponent(null);
  }

  selectTaskComponent(taskComponent) {
    this.taskList.forEach( item => item.isSelected = false);

    if(taskComponent) {
      taskComponent.isSelected = true;
      this.selectedTask = taskComponent.task;
    } else {
      this.selectedTask = null;
    }
  }
}