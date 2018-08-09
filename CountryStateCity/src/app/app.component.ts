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
  selectedCountry: Country;
  selectedState: State;
  selectedCity: City;

  constructor() { }

  ngOnInit() {
  };

  countries: Country[] = [
    { name: "USA" },
    { name: "India" }
  ];

  states: State[] = [
    { name: "California", countrtName: "USA" },
    { name: "Florida", countrtName: "USA" },
    { name: "Telangana", countrtName: "India" },
    { name: "Andhra Pradesh", countrtName: "India" }
  ];

  cities: City[] = [
    { name: "Los Angeles", statetName: "California" },
    { name: "San Francisco", statetName: "California" },
    { name: "Miami", statetName: "Florida" },
    { name: "Tampa", statetName: "Florida" },
    { name: "Hyderabad", statetName: "Telangana" },
    { name: "Secundrabad", statetName: "Telangana" },
    { name: "Vijayawada", statetName: "Andhra Pradesh" },
    { name: "Vizag", statetName: "Andhra Pradesh" }
  ]

  OnCountrySelected(data: Country) {
    this.selectedCountry = data;
    console.log(data.name);
  }

  OnStateSelected(data: State) {
    this.selectedState = data;
    console.log(data.name);
  }

  OnCitySelected(data: City) {
    this.selectedCity = data;
    console.log(data.name);
  }
}
