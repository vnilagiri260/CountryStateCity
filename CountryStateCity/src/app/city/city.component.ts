import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { City } from '../model/city.model';
import { State } from '../model/state.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() selectedState: string;
  @Output() cityselected: EventEmitter<string> = new EventEmitter<string>();

  cityName: string;
  filteredCities: City[];

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

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.filteredCities = this.cities.filter(city => city.statetName === this.selectedState);
  }

  highlightSelected() {
    this.cityselected.emit(this.cityName);
  }
}
