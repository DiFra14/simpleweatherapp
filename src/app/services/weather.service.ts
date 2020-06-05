import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherFromCity(city: String) {
    if (city) {
      return this.http.get<Weather>(`${environment.endpoint}=${environment.apiKey}&q=${city}&days=10`);
    }
  }
}
