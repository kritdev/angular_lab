import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationItem } from 'src/app/models/configuration-item';

@Component({
  selector: 'app-configuration-item',
  templateUrl: './configuration-item.component.html',
  styleUrls: ['./configuration-item.component.css']
})
export class ConfigurationItemComponent implements OnInit {
  @Input()
  configurationItem: ConfigurationItem;

  constructor() { }

  ngOnInit(): void {
  }

  getConfigItemName() {
    return this.configurationItem.name;
  }

  getConfigItemGroup() {
    return "File:";
  }
}
