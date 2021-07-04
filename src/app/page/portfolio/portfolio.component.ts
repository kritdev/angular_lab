import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { IProduct } from '../product/product.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  productList: IProduct[] = []

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.productList = this.dataService.retrieveProductList();
  }

}
