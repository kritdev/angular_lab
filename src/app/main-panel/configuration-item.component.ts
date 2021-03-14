import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationItem } from 'src/app/models/configuration-item';
import { SettingConfig } from 'src/app/models/setting-config';
import { UserSettingConfig } from 'src/app/models/user-setting-config';

@Component({
  selector: 'app-configuration-item',
  templateUrl: './configuration-item.component.html',
  styleUrls: ['./configuration-item.component.css']
})
export class ConfigurationItemComponent implements OnInit {
  @Input()
  configurationItem: ConfigurationItem;

  @Input()
  settingConfig : SettingConfig;// = new UserSettingConfig();

  constructor() { }

  ngOnInit(): void {
  }

  getConfigItemName() {
    return this.configurationItem.name;
  }

  getConfigValue() {
    return this.settingConfig.getConfigValue(this.configurationItem.id);
  }

  setConfigValue(event) {
    this.settingConfig.setConfigValue(this.configurationItem.id, event.target.value);
  }



  getConfigItemGroup() {
    return "File:";
  }
}
