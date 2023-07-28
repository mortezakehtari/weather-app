import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { City } from '../../models/location.model';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Store } from '@ngrx/store';
import * as AppReducer from '../../../store/app-reducer';
import * as CityActions from '../../store/actions/city.action';
import * as ForecastActions from '../../store/actions/forecast.action';
import * as SearchLoadinActions from '../../store/actions/search-loading.action';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  cityControl: FormControl = new FormControl<string>('');
  cityList!: Observable<City[]>;
  loading!: Observable<boolean>;

  constructor(
    private store: Store<AppReducer.AppState>) { }

  ngOnInit(): void {
    this.initSearchFunctionality();
    this.cityList = this.store.select('city').pipe(map(item => item.cities))
    this.loading = this.store.select('searchLoading').pipe(map(item => item.loading))
  }

  initSearchFunctionality() {
    this.cityControl.valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged())
      .subscribe({
        next: (value: string) => {
          if (value && typeof value !== 'object') {
            this.store.dispatch(SearchLoadinActions.SearchLoading({loading: true}))
            this.store.dispatch(CityActions.onSearch({ search: value }));
          }
        }
      })
  }

  displayName(city: City) {
    return city ? (city.Country.LocalizedName + ', ' + city.LocalizedName) : '';
  }

  onSelectedCity(event: MatOptionSelectionChange) {
    this.store.dispatch(ForecastActions.ForecastLoading({ loading: true }));
    this.store.dispatch(CityActions.SelectCity({ city: event.source.value }));
  }

}
