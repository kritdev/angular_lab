import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ConfigurationMenuComponent } from '../components/configuration-menu/configuration-menu.component';
import { Configuration } from '../models/configuration';
import { ConfigurationMenu } from '../models/configuration-menu';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
  @ViewChildren(ConfigurationMenuComponent)
  configComponentList: QueryList<ConfigurationMenuComponent>;
  
  configList: ConfigurationMenu[] = new Configuration().getConfiguration();

  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(configComponent: ConfigurationMenuComponent) {
    this.configComponentList.forEach(element => {
      this.clearMenuSelected(element);
    });

    configComponent.isSelected = true;
  }

  clearMenuSelected(configComponent: ConfigurationMenuComponent) {
    configComponent.isSelected = false;
  }
}
