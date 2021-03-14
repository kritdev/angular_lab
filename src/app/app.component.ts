import { Component } from '@angular/core';
import { Configuration } from './models/configuration';
import { ConfigurationMenu } from './models/configuration-menu';
import { SettingConfig } from './models/setting-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab';
  configuration: Configuration = new Configuration();
  configurationMenuList: ConfigurationMenu[] = this.configuration.getConfiguration();
  settingConfig: SettingConfig = this.configuration.getUserSetting();

  constructor() {
  }

  changeSetting(newSetting:SettingConfig) {
    this.settingConfig = newSetting;
  }
}
