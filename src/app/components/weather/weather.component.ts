import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnChanges {
  @Input() city: string;
  weather: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.city.currentValue) {
      this.weatherService.getWeatherFromCity(this.city).subscribe(res => {
        this.weather = res
        console.log(res);
      });
    }
  }

}
