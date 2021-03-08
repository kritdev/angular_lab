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
  }

  addTask() {
    this.task.id = this.taskID++;
    this.todoList.push(this.task);
    this.task = new Task();
  }

  deleteTask(index) {
    this.todoList.splice(index, 1);
  }
}