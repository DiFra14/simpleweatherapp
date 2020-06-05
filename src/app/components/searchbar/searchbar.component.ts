import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  @Output() cityEmit: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  searchCityHandler(form: NgForm) {
    // Controlli
    this.cityEmit.emit(form.value.city);
    form.reset();
  }
}
