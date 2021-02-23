import { Component } from '@angular/core';

@Component({
  selector: 'lab4-component',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})
export class Lab4Component {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {}

  isEven(item) {
    return item % 2 === 0;
  }
}