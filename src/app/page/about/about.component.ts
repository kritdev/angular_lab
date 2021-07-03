import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data = {
    imageUrl: 'assets/img/JoneSalad.png',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi temporibus quidem asperiores earum assumenda recusandae nesciunt vitae quos! Sed reprehenderit error voluptas consequuntur aliquid ipsum aliquam sunt voluptates odio animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi temporibus quidem asperiores earum assumenda recusandae nesciunt vitae quos! Sed reprehenderit error voluptas consequuntur aliquid ipsum aliquam sunt voluptates odio animi.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
