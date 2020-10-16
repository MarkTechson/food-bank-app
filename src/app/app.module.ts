import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodBankLocationComponent } from './food-bank-location/food-bank-location.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodBankLocationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }