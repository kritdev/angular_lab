import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TabPanelComponent,
    SidePanelComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
