import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { State } from '../model/state.model';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit, OnChanges {
  @Input() selectedCountry: string;
  @Output() stateselected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  filteredStates: State[];
  stateName: string;

  states: State[] = [
    { name: "California", countrtName: "USA" },
    { name: "Florida", countrtName: "USA" },
    { name: "Telangana", countrtName: "India" },
    { name: "Andhra Pradesh", countrtName: "India" }
  ];

  ngOnInit() {    
  }

  ngOnChanges() {
    this.filteredStates = this.states.filter(state => state.countrtName === this.selectedCountry);
  }

  highlightSelected() {
    this.stateselected.emit(this.stateName);
  }
}
