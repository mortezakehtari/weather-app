import { ActionReducerMap } from "@ngrx/store";
import * as City from "../main/store/reducers/city.reducer";
import * as Forecast from "../main/store/reducers/forecast.reducer";
import * as SearchLoading from "../main/store/reducers/search-loading.reducer";

export interface AppState {
  city: City.CityState,
  searchLoading: SearchLoading.SearchLoadingState,
  forecast: Forecast.ForecastState
}

export const appReducer: ActionReducerMap<AppState> = {
  city: City.CityReducer,
  searchLoading: SearchLoading.SearchLoadingReducer,
  forecast: Forecast.ForecastReducer
};
