import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatButtonModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
