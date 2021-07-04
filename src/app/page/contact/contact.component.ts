import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.retrieveContactData();
  }

}
