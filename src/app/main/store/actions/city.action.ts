import { createAction, props } from "@ngrx/store"
import { City } from "../../models/location.model";


export const onSearch = createAction('[City] search cities', props<{search: string}>());
export const SearchCities = createAction('[City] list of cities', props<{cities: City[]}>());
export const SelectCity = createAction('[City] select city', props<{ city: City }>());
