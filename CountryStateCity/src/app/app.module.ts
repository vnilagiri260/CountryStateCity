import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CountryComponent,
    StateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
