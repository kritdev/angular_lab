import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { GroupCardComponent } from './component/group-card/group-card.component';
import { DetailCardComponent } from './component/detail-card/detail-card.component';
import { DetailCardDirective } from './component/detail-card.directive';
import { NewsCardComponent } from './component/news-card/news-card.component';
import { StatisticCardComponent } from './component/statistic-card/statistic-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    GroupCardComponent,
    DetailCardComponent,
    DetailCardDirective,
    NewsCardComponent,
    StatisticCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
