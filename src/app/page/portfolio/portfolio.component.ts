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
      name: 'P1',
      price: 550,
      imageUrl: 'assets/img/p1.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies justo nibh. Vestibulum convallis tempor ex, non tempus nibh vestibulum porttitor. Nullam est elit, mattis id condimentum' 
    },
    {
      name: 'P2',
      price: 550,
      imageUrl: 'assets/img/p2.png',
      description: 'Descript 1' 
    },
    {
      name: 'P3',
      price: 550,
      imageUrl: 'assets/img/p3.png',
      description: 'Descript 1' 
    },
    {
      name: 'P4',
      price: 550,
      imageUrl: 'assets/img/p4.png',
      description: 'Descript 1' 
    },
    {
      name: 'P5',
      price: 550,
      imageUrl: 'assets/img/p5.png',
      description: 'Descript 1' 
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
