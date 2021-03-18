import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { FxConvertorComponent } from './fx-convertor/fx-convertor.component';

@NgModule({
  declarations: [
    AppComponent,
    FxConvertorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
