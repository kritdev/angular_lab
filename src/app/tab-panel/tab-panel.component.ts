import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { TabMenuComponent } from '../components/tab-menu/tab-menu.component';
import { Configuration } from '../models/configuration';
import { SettingConfig } from '../models/setting-config';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {
  @Input()
  configuration: Configuration;
  
  @Output()
  OnChangeSetting: EventEmitter<SettingConfig> = new EventEmitter();

  @ViewChildren(TabMenuComponent)
  tabMenuComponentList: QueryList<TabMenuComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(tabMenuComponent: TabMenuComponent) {
    this.tabMenuComponentList.forEach( item => item.isSeleted = false );
    tabMenuComponent.isSeleted = true;

    this.OnChangeSetting.emit(tabMenuComponent.settingConfig);
  }

}
