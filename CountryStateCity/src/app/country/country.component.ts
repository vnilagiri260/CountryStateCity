import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() country: Country;
  @Output() countryselected: EventEmitter<Country> = new EventEmitter<Country>();

  //countryList: any[];
  constructor() { }

  ngOnInit() {
  }

  highlightSelected(selectedCountry) {
    this.countryselected.emit(selectedCountry);
  }
}
