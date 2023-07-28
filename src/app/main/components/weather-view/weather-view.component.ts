import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppReducer from '../../../store/app-reducer';
import { Forecast } from '../../models/forecast.model';
import { Observable, map } from 'rxjs';
import { City } from '../../models/location.model';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent {
  constructor(private store: Store<AppReducer.AppState>){}
  forecast: Observable<Forecast | null> = this.store.select('forecast').pipe(map(item => item.forecast));
  loading: Observable<boolean> = this.store.select('forecast').pipe(map(item => item.loading));
  city: Observable<City | null> = this.store.select('city').pipe(map(item => item.selectedCity))
}
