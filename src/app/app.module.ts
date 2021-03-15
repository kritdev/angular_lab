import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteModule } from './app-route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CatalogModule,
    HomeModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
