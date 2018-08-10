import { Component, OnInit } from '@angular/core';
import { Country } from './model/country.model';
import { State } from './model/state.model';
import { City } from './model/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  selectedCountry: string;
  selectedState: string;
  selectedCity: string;

  constructor() { }

  ngOnInit() {
  };

  OnCountrySelected(data: string) {
    this.selectedCountry = data;
    this.selectedState = null;
    console.log(data);
  }

  OnStateSelected(data: string) {
    this.selectedState = data;
    console.log(data);
  }

  OnCitySelected(data: string) {
    this.selectedCity = data;
    console.log(data);
  }
}
