import { Component, OnInit } from '@angular/core';

import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface FoodNode {
  name: string;
  icon: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    icon: 'menu_book',
    children: [
      {name: 'Apple', icon: 'radio_button_checked'},
      {name: 'Banana', icon: 'radio_button_checked'},
      {name: 'Fruit loops', icon: 'radio_button_checked'},
    ]
  }, {
    name: 'Vegetables',
    icon: 'menu_book',
    children: [
      {
        name: 'Green',
        icon: 'menu_book',
        children: [
          {name: 'Broccoli', icon: 'menu_book'},
          {name: 'Brussels sprouts', icon: 'menu_book'},
        ]
      }, {
        name: 'Orange',
        icon: 'menu_book',
        children: [
          {name: 'Pumpkins', icon: 'menu_book'},
          {name: 'Carrots', icon: 'menu_book'},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() { 
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
