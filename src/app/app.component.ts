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
  configurationMenuList: ConfigurationMenu[] = new Configuration().getConfiguration();
  settingConfig: SettingConfig = new Configuration().getUserSetting();

  constructor() {
    
  }
}
