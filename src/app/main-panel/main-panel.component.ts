import { Component, Input, OnInit } from '@angular/core';
import { Configuration } from '../models/configuration';
import { ConfigurationItem } from '../models/configuration-item';
import { ConfigurationMenu } from '../models/configuration-menu';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  @Input()
  configurationMenuList: ConfigurationMenu[]; //= new Configuration().getConfiguration();
  
  constructor() { }

  ngOnInit(): void {
  }

  getConfigurationItemList(configurationMenuList: ConfigurationMenu[]) {
    //If no data, return blank array
    if(!configurationMenuList) return [];

    let configItemList = [];
    configurationMenuList.forEach(config => {
      //append item for menu
      configItemList.push(new ConfigurationItem(config.getMenuId(), config.menu, '', true));

      //append item for menu's items
      configItemList = configItemList.concat(config.itemList);

      //append item for submens
      configItemList = configItemList.concat(this.getConfigurationItemList(config.subMenuList));
    });

    return configItemList;
  }

}
