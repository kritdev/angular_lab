import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';

import { CatalogModule } from '../catalog/catalog.module';


@NgModule({
  declarations: [NavbarComponent, MainContentComponent],
  imports: [
    CommonModule,
    CatalogModule
  ],
  exports: [
    NavbarComponent,
    MainContentComponent
  ]
})
export class HomeModule { }
