import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'products',
  //   component: ProductListComponent
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // LoginComponent ,
    // PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
