import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  hideBacktoTop = true;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    // let y = window.scrollY;
    this.hideBacktoTop = 100 >= window.scrollY;
  }
}
