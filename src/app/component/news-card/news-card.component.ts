import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() data = {title:'news-title', content:'news-content'};
  
  constructor() { }

  ngOnInit(): void {
  }

}
