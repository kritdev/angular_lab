import { Component, OnInit } from '@angular/core';

import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { SidebarNode, TREE_DATA } from '../sidebar-node';


// const TREE_DATA: SidebarNode[] = [
//   {
//     name: 'Fruit',
//     icon: 'menu_book',
//     children: [
//       {name: 'Apple', icon: 'radio_button_checked'},
//       {name: 'Banana', icon: 'radio_button_checked'},
//       {name: 'Fruit loops', icon: 'radio_button_checked'},
//     ]
//   }, {
//     name: 'Vegetables',
//     icon: 'menu_book',
//     children: [
//       {
//         name: 'Green',
//         icon: 'radio_button_checked',
//         children: [
//           {name: 'Broccoli', icon: 'radio_button_unchecked'},
//           {name: 'Brussels sprouts', icon: 'radio_button_unchecked'},
//         ]
//       }, {
//         name: 'Orange',
//         icon: 'radio_button_checked',
//         children: [
//           {name: 'Pumpkins', icon: 'radio_button_unchecked'},
//           {name: 'Carrots', icon: 'radio_button_unchecked'},
//         ]
//       },
//     ]
//   },
// ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<SidebarNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SidebarNode>();

  constructor() { 
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: SidebarNode) => !!node.children && node.children.length > 0;

  expandable(node) {
    return !!node.children && node.children.length > 0;
  }
}
