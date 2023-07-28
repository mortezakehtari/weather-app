import { Action, createReducer, on } from '@ngrx/store'
import { City } from '../../models/location.model'
import * as CityActions from '../actions/city.action'


export interface CityState {
  cities: City[],
  selectedCity: City | null
}

const initialCityState: CityState = {
  cities: [],
  selectedCity: null
}


const _CityReducer = createReducer(
  initialCityState,
  on(CityActions.SearchCities, (state, { cities }) => ({ cities: cities, selectedCity: state.selectedCity })),
  on(CityActions.SelectCity, (state, { city }) => ({ cities: state.cities , selectedCity: city}))
)

export function CityReducer(state:  CityState | undefined, action: Action) {
  return _CityReducer(state, action);
}





