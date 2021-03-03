import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class ToDoListComponent {

  todoList = [];
  task = '';

  constructor() {}

  addTask() {
    this.todoList.push(this.task);
    this.task = '';
  }

  deleteTask(index) {
    this.todoList.splice(index, 1);
  }
}