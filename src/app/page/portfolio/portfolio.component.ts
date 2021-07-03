import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/product.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  productList: IProduct[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
