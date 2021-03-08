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
  taskID = 1;

  constructor() {
    this.task = new Task();
    this.todoList.push({id:1, name:'task 1', description:'abcd12345678'});
    this.todoList.push({id:2, name:'task 2', description:'aaaaaaaaaaa8'});
    this.todoList.push({id:3, name:'task 3', description:'ab5555555555'});
  }

  addTask() {
    this.task.id = this.taskID++;
    this.todoList.push(this.task);
    this.task = new Task();
  }

  deleteTask(task) {
    let index = this.todoList.findIndex( item => item.id === task.id);
    if(index >= 0 ) 
      this.todoList.splice(index, 1);
  }

  selectTaskComponent(taskComponent) {
    this.taskList.forEach( item => item.isSelected = false);
    taskComponent.isSelected = true;
  }
}