import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MainComponent } from './layout/main/main.component';
import { AboutComponent } from './page/about/about.component';
import { SkillComponent } from './page/skill/skill.component';
import { ContactComponent } from './page/contact/contact.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    AboutComponent,
    SkillComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
