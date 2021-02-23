import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent {
  @Input()
  counterName:string;

  counter = 0;

  constructor() {}

  increment() { this.counter++; }
  decrement() { this.counter--; }
}