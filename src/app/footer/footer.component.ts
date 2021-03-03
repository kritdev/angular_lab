import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['../common.css', './footer.component.css']
})
export class FooterComponent {
  constructor() {}

  showmessage(msg) {
    alert(msg);
  }
}