import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TabMenuComponent } from '../components/tab-menu/tab-menu.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {
  @ViewChildren(TabMenuComponent)
  tabMenuComponentList: QueryList<TabMenuComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(tabMenuComponent: TabMenuComponent) {
    this.tabMenuComponentList.forEach( item => item.isSeleted = false );
    tabMenuComponent.isSeleted = true;
  }

}
