import { Component, OnInit, ViewChild } from '@angular/core';
// import { BackendService } from 'src/app/backend.service';
// import { ProductListComponent } from 'src/app/catalog/product-list/product-list.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  // @ViewChild('productList', {static: true})
  // productList: ProductListComponent;

  // constructor(private backendService: BackendService) {}
  
  ngOnInit() {
    // this.productList.products = this.backendService.getProducts();
  }
}
