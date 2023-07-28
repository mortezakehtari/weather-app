import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../models/location.model';
import { Forecast } from '../models/forecast.model';

const API_URL = environment.WEATHER_API_URL;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  searchCities(search: string): Observable<City[]> {
    return this.http.get<City[]>(`${API_URL}locations/v1/cities/autocomplete?q=${search}`);
  }

  getWeatherOfCity(cityKey: number): Observable<Forecast> {
    console.log(cityKey)
    return this.http.get<Forecast>(`${API_URL}forecasts/v1/daily/5day/${cityKey}`);
  }
}
