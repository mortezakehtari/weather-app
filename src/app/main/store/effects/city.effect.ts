import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { exhaustMap, catchError, switchMap, tap } from 'rxjs/operators';
import * as CityActions from '../actions/city.action';
import * as SearchLoadingActions from '../actions/search-loading.action';
import * as ForecastActions from '../actions/forecast.action';
import { WeatherService } from '../../services/weather.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class WeatherEffects {


  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private snackBar: MatSnackBar
  ) { }

  citySearchEffect$ = createEffect(() => this.actions$.pipe(
    ofType(CityActions.onSearch),
    exhaustMap((action) => this.weatherService.searchCities(action.search)
      .pipe(
        switchMap(cities => of(
          CityActions.SearchCities({ cities }),
          SearchLoadingActions.SearchLoading({ loading: false })
        )),
        catchError(error => of(
          SearchLoadingActions.SearchLoading({ loading: false })
        ).pipe(tap(() => this.showError(error.message))))
      ))
  ))

  citySelecEffect$ = createEffect(() => this.actions$.pipe(
    ofType(CityActions.SelectCity),
    exhaustMap((action) => this.weatherService.getWeatherOfCity(action.city.Key)
      .pipe(
        switchMap(forecast => of(
          ForecastActions.UpdateForecast({ forecast }),
          ForecastActions.ForecastLoading({ loading: false })
        )),
        catchError(error => of(
          ForecastActions.ForecastLoading({ loading: false }),
          ForecastActions.UpdateForecast({ forecast: null })
        ).pipe(tap(() => this.showError(error.message))))
      ))
  )
  );

  showError(message: string): void {
    this.snackBar.open(message, 'dismiss', {
      duration: 30000,
    });
  }
}
