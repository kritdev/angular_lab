import {Component, Input} from '@angular/core';

@Component({
  selector: 'category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrls: ['./category-menu-item.component.css']
})
export class CategoryMenuItemComponent {
  @Input()
  title: string = 'category menu item';
  
  @Input()
  image: string = '../../../../assets/cat-menu1.png';
  constructor() {}
}