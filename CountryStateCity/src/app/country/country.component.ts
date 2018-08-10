import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() country: Country;  
  @Output() countryselected: EventEmitter<string> = new EventEmitter<string>();
  countryName: string;
  countries: Country[];
  constructor() { }

  ngOnInit() {
    this.countries = [
      { cname: "USA" },
      { cname: "India" }
    ]
  }

 

  highlightSelected() {
    this.countryselected.emit(this.countryName);
  }
}
