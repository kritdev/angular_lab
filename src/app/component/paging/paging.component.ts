import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() totalItem = 1;
  @Input() itemPerPage = 1;

  activePage = 2;

  constructor() { }

  ngOnInit(): void {
  }

  getFirstItemInPage() {
    return this.itemPerPage * (this.activePage - 1) + 1;
  }

  getLastItemInPage() {
    const result = this.itemPerPage * (this.activePage);
    return result < this.totalItem ? result : this.totalItem;
  }

}
