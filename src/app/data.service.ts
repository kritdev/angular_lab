import { Injectable } from '@angular/core';
import { IProduct } from './page/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  retrieveProductList(): IProduct[] {
    return [
      {
        name: 'เก้าอี้ไม้เล็ก (กลม)',
        price: 550,
        imageUrl: 'assets/img/p1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies justo nibh. Vestibulum convallis tempor ex, non tempus nibh vestibulum porttitor. Nullam est elit, mattis id condimentum' 
      },
      {
        name: 'เก้าอี้ไม้เล็ก (เหลี่ยม)',
        price: 550,
        imageUrl: 'assets/img/p2.png',
        description: 'Sed ultricies justo nibh. Vestibulum convallis tempor ex, non tempus nibh vestibulum porttitor. Nullam est elit, mattis id condimentum' 
      },
      {
        name: 'เก้าอี้ไม้ (เหลี่ยม)',
        price: 890,
        imageUrl: 'assets/img/p3.png',
        description: 'Vestibulum convallis tempor ex, non tempus nibh vestibulum porttitor. Nullam est elit, mattis id condimentum' 
      },
      {
        name: 'เก้าอี้ไม้ (กลม) ขากลม',
        price: 990,
        imageUrl: 'assets/img/p4.png',
        description: 'Non tempus nibh vestibulum porttitor. Nullam est elit, mattis id condimentum' 
      },
      {
        name: 'เก้าอี้ไม้ (กลม) ขาเหลี่ยม',
        price: 990,
        imageUrl: 'assets/img/p5.png',
        description: 'Nullam est elit, mattis id condimentum. Sed ultricies justo nibh. ' 
      },
    ]
  }

  retrieveContactData(): { title: string; description: string; }[] {
    return [
      {title:'Phone:', description:'66-099-999-9999'},
      {title:'Email:', description:'thai.codecamp@gmail.com'},
      {title:'Line ID:', description:'codecamp'},
      {title:'Website:', description:'www.codecampthailand.com'},
      {title:'Address:', description:'99/31 Moo4 Software Park Building, Chaeng Wattana Road, Klong Gleua, Pakkred, Nonthaburi 11120'}
    ];
  }

  retrieveSkillList(): string[] {
    return [
      'Javascript',
      'HTLM',
      'MySQL',
      'NodeJs',
      'Koa',
      'Cloud Deployment',
      'Algorithm: Data Structure'
    ];
  }

  retrieveAboutData(): { imageUrl: string; description: string; } {
    return {
      imageUrl: 'assets/img/JoneSalad.png',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi temporibus quidem asperiores earum assumenda recusandae nesciunt vitae quos! Sed reprehenderit error voluptas consequuntur aliquid ipsum aliquam sunt voluptates odio animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi temporibus quidem asperiores earum assumenda recusandae nesciunt vitae quos! Sed reprehenderit error voluptas consequuntur aliquid ipsum aliquam sunt voluptates odio animi.'
    }
  }

  constructor() { }
}
