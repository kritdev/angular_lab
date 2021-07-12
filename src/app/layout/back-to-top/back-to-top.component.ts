import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  hideBacktoTop = true;
  removeComponent = true;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.hideBacktoTop = 100 >= window.scrollY;

    if(this.hideBacktoTop) {
      setTimeout(() => this.removeComponent = this.hideBacktoTop, 3000);
    } else {
      this.removeComponent = this.hideBacktoTop;
    }
  }
}
