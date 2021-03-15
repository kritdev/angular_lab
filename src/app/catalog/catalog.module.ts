import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PanelComponent } from './panel/panel.component'; 


@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    PanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent
  ]
})
export class CatalogModule { }
