import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {
  @Input()
  title: String;

  @Output()
  OnSelected: EventEmitter<TabMenuComponent> = new EventEmitter();

  isSeleted: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

  selectMenu() {
    this.OnSelected.emit(this);
  }
}
