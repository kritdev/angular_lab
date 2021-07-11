import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() totalItem = 1;
  @Input() itemPerPage = 1;

  activePage = 1;

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

  getTotalPage() {
    return Math.ceil(this.totalItem/this.itemPerPage);
  }

  getPageArray() {
    return Array(this.getTotalPage()).fill(1).map((x, i) => i + 1);
  }

  isFirstPage() {
    return this.activePage == 1;
  }

  isLastPage() {
    return this.activePage == this.getTotalPage();
  }

  setActivePage(pageNumber) {
    this.activePage = pageNumber;
  }

  toPreviousPage() {
    this.activePage -= 1;
  }

  toNextPage() {
    this.activePage += 1;
  }
}
