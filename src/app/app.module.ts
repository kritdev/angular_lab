import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './banner/logo/logocomponent';
import { MenuComponent } from './banner/menu/menu.component';
import { BannerContentComponent } from './banner/banner-content/banner-content.component';
import { SearchComponent } from './banner/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent, ContentComponent, FooterComponent,
    LogoComponent, MenuComponent, SearchComponent, BannerContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
