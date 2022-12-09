import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormEx1Component } from './form-ex1/form-ex1.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { FormEx7Component } from './form-ex7/form-ex7.component';



@NgModule({
  declarations: [
    AppComponent,
    FormEx1Component,
    NavbarComponent,
    CardComponent,
    FormEx7Component,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
