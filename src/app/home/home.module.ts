import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';

import { CatalogModule } from '../catalog/catalog.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [NavbarComponent, MainContentComponent, HomeComponent],
  imports: [
    CommonModule,
    CatalogModule
  ],
  exports: [
    NavbarComponent,
    MainContentComponent,
    HomeComponent
  ]
})
export class HomeModule { }
