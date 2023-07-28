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
  on(ForecastActions.ForecastLoading, (state, { loading }) => ({ loading: loading, forecast: state.forecast  })),
  on(ForecastActions.UpdateForecast, (state, { forecast }) => ({ loading: state.loading, forecast: forecast })),

)

export function ForecastReducer(state:  ForecastState | undefined, action: Action) {
  return _forecastReducer(state, action);
}
