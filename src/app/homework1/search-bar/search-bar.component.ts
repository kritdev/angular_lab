import {Component} from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['../../app.component.css','./search-bar.component.css','../navbar/navbar.icon.css']
})
export class SearchBarComponent {
  searchText = '';

  constructor() {}

  search() {
    alert("Searching for :" + this.searchText);
  }
}