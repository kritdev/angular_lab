import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.css']
})
export class StatisticCardComponent implements OnInit {

  @Input() data = {title:'news-title', count:0, iconName:'shopping_bag', bgClass:'bg-primary'};
  
  constructor() { }

  ngOnInit(): void {
  }

}
