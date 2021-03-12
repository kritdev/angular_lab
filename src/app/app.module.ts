import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { ConfigurationMenuComponent } from './components/configuration-menu/configuration-menu.component';
import { ConfigurationItemComponent } from './components/configuration-item/configuration-item.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TabPanelComponent,
    SidePanelComponent,
    MainPanelComponent,
    ConfigurationMenuComponent,
    ConfigurationItemComponent,
    TabMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
