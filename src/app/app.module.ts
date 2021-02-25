import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './homework1/home/home.component';
import { NavbarComponent } from './homework1/navbar/navbar.component';
import { SearchBarComponent } from './homework1/search-bar/search-bar.component';
import { TopBannerComponent } from './homework1/top-banner/top-banner.component';
import { CategoryMenuComponent } from './homework1/category-menu/category-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, NavbarComponent, SearchBarComponent, TopBannerComponent, CategoryMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
