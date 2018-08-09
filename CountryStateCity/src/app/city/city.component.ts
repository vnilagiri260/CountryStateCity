import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { City } from '../model/city.model';
import { State } from '../model/state.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() city: City;
  @Input() state: State
  @Output() cityselected: EventEmitter<City> = new EventEmitter<City>();

  constructor() { }

  ngOnInit() {
  }

  highlightSelected(selectedCity) {
    this.cityselected.emit(selectedCity);
  }
}
