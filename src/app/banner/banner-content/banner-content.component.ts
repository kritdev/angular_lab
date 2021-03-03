import { Component } from '@angular/core';

@Component({
  selector: 'banner-content',
  templateUrl: 'banner-content.component.html',
  styleUrls: ['../../common.css', './banner-content.component.css']
})
export class BannerContentComponent {
  constructor() {}

  showmessage(msg) {
    alert(msg);
  }
}