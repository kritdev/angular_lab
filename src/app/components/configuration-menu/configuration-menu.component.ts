import { TmplAstRecursiveVisitor } from '@angular/compiler';
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

  @Input()
  menuLevel: number;

  showSubmenu: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  
  /**
   * if subMenuList is null or subMenuList.length = 0, return false;
   */
  hasSubmenu() {
    return this.configurationMenu.subMenuList && this.configurationMenu.subMenuList.length;
  }

  toggleSubmenu(event) {
    this.showSubmenu = !this.showSubmenu;
    event.stopPropagation();
  }
}
