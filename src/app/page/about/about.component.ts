import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.retrieveAboutData();
  }

}
