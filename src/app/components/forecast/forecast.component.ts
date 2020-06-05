import { Component, Input } from '@angular/core';
import { Forecast } from 'src/app/models/weather';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  @Input() forecast: Forecast;

  constructor() { }
  
}
