import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
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
  
  @Input()
  configurationMenuList: ConfigurationMenu[]; // = new Configuration().getConfiguration();

  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(configComponent: ConfigurationMenuComponent) {
    this.clearMenuSelected(this.configComponentList);
    configComponent.isSelected = true;
  }

  clearMenuSelected(configComList: QueryList<ConfigurationMenuComponent>) {
    if(!configComList) return;

    configComList.forEach(configCom => {
      configCom.isSelected = false;
      this.clearMenuSelected(configCom.configComponentList);
    });
  }
}
