import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PanelComponent } from './panel/panel.component'; 

import { BackendService } from '../backend.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    PanelComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [BackendService],
  exports: [
    ProductListComponent,
    ProductItemComponent
  ]
})
export class CatalogModule { }
