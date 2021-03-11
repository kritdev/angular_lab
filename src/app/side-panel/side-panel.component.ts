import { Component, OnInit } from '@angular/core';
import { Configuration } from '../models/configuration';
import { ConfigurationMenu } from '../models/configuration-menu';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  configList: ConfigurationMenu[] = new Configuration().getConfiguration();

  constructor() { }

  ngOnInit(): void {
  }

}
