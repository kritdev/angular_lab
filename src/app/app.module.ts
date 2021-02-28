import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './homework1/home/home.component';
import { NavbarComponent } from './homework1/navbar/navbar.component';
import { SearchBarComponent } from './homework1/search-bar/search-bar.component';
import { TopBannerComponent } from './homework1/top-banner/top-banner.component';
import { CategoryMenuComponent } from './homework1/category-menu/category-menu.component';

import { TopMenuLeftComponent } from './homework1/navbar/top-menu-left/top-menu-left.component';
import { TopMenuRightComponent } from './homework1/navbar/top-menu-right/top-menu-right.component';
import { CenterMenuComponent } from './homework1/navbar/center-menu/center-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, NavbarComponent, SearchBarComponent, TopBannerComponent, CategoryMenuComponent,
    TopMenuLeftComponent, TopMenuRightComponent, CenterMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
