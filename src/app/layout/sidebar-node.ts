export interface SidebarNode {
  name: string;
  icon: string;
  children?: SidebarNode[];
}

export const TREE_DATA: SidebarNode[] = [
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
        icon: 'radio_button_checked',
        children: [
          {name: 'Broccoli', icon: 'radio_button_unchecked'},
          {name: 'Brussels sprouts', icon: 'radio_button_unchecked'},
        ]
      }, {
        name: 'Orange',
        icon: 'radio_button_checked',
        children: [
          {name: 'Pumpkins', icon: 'radio_button_unchecked'},
          {name: 'Carrots', icon: 'radio_button_unchecked'},
        ]
      },
    ]
  },
];