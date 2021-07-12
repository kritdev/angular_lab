import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css']
})
export class TableCardComponent implements OnInit {

  @Input() data = {
    columns: ['a','b','c'],
    types: [],
    records: [],
    itemPerPage: 0
  };

  activePage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getDisplayRecord() {
    if(this.data.itemPerPage && this.data.itemPerPage > 0){
      return this.data.records.slice( 
        this.data.itemPerPage * (this.activePage -1 ), 
        this.data.itemPerPage * (this.activePage)
      );
    } else {
      return this.data.records;
    }
  }

  onPageChange(event) {
    this.activePage = event;
  }
}
