import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from '../model/state.model';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  @Input() state: State;
  @Input() country: Country;
  @Output() stateselected: EventEmitter<State> = new EventEmitter<State>();
  constructor() { }

  ngOnInit() {
  }

  highlightSelected(selectedState) {
    this.stateselected.emit(selectedState);
  }
}
