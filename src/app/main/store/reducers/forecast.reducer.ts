import { Action, createReducer, on } from "@ngrx/store";
import * as ForecastActions from '../actions/forecast.action';
import { Forecast } from "../../models/forecast.model";



export interface ForecastState {
  loading: boolean,
  forecast: Forecast | null,
}

const initialForecastLoadingState: ForecastState = {
  loading: false,
  forecast: null
}

const _forecastReducer = createReducer(
  initialForecastLoadingState,
  on(ForecastActions.ForecastLoading, (state, { loading }) => ({...state, loading: loading  })),
  on(ForecastActions.UpdateForecast, (state, { forecast }) => ({...state, forecast: forecast })),

)

export function ForecastReducer(state:  ForecastState | undefined, action: Action) {
  return _forecastReducer(state, action);
}
