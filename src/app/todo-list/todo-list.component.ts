import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class ToDoListComponent {

  todoList = [];
  task : Task;
  taskID = 1;

  constructor() {
    this.task = new Task();
    this.todoList.push({id:1, name:'aaa', description:'1111111'} );
    this.todoList.push({id:1, name:'bbb', description:'2222222'} );
    this.todoList.push({id:1, name:'ccc', description:'3333333'} );
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
}