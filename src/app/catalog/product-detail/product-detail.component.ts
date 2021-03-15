import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService) {}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.productId = p.id;
    });
  }

  getProduct() {
    return this.backendService.getProductById(this.productId);
  }
}
