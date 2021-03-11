import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationMenu } from 'src/app/models/configuration-menu';

@Component({
  selector: 'app-configuration-menu',
  templateUrl: './configuration-menu.component.html',
  styleUrls: ['./configuration-menu.component.css']
})
export class ConfigurationMenuComponent implements OnInit {
  @Input()
  configurationMenu: ConfigurationMenu;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    console.log('configurationMenu = ' + JSON.stringify(this.configurationMenu));
  }
}
