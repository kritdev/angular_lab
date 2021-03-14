import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SettingConfig } from 'src/app/models/setting-config';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {
  @Input()
  title: String;

  @Input()
  settingConfig: SettingConfig;

  @Input()
  isSeleted: Boolean;

  @Output()
  OnSelected: EventEmitter<TabMenuComponent> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  selectMenu() {
    this.OnSelected.emit(this);
  }
}
