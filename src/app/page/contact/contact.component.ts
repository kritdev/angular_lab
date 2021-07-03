import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data = {
    'Phone:':'66-099-999-9999',
    'Email:':'thai.codecamp@gmail.com',
    'Line ID:':'codecamp',
    'Website:':'www.codecampthailand.com',
    'Address:':'99/31 Moo4 Software Park Building, Chaeng Wattana Road, Klong Gleua, Pakkred, Nonthaburi 11120'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
