import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor() { 
    this.products = [];
  }

  ngOnInit(): void {
  }

  selectedProduct(product: Product) {
    alert(`Product ${product.name} selected`);
  }
}
