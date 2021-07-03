import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data = [
    {title:'Phone:', description:'66-099-999-9999'},
    {title:'Email:', description:'thai.codecamp@gmail.com'},
    {title:'Line ID:', description:'codecamp'},
    {title:'Website:', description:'www.codecampthailand.com'},
    {title:'Address:', description:'99/31 Moo4 Software Park Building, Chaeng Wattana Road, Klong Gleua, Pakkred, Nonthaburi 11120'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
