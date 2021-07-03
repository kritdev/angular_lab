import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title = 'Title';
  @Input() title_image = null;

  constructor() { }

  ngOnInit(): void {
  }

}
