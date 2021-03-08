import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task: Task;

  @Output()
  OnDeleted: EventEmitter<Task> = new EventEmitter(); 

  @Output()
  OnSelected: EventEmitter<TaskComponent> = new EventEmitter(); 

  isSelected: Boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.OnDeleted.emit(this.task);
  }

  selectTask() {
    this.OnSelected.emit(this);
  }
}
