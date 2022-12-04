import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormEx1Component } from './form-ex1/form-ex1.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    FormEx1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
