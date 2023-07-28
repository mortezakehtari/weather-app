import { createAction, props } from "@ngrx/store";
import { Forecast } from "../../models/forecast.model";

export const ForecastLoading = createAction('[loading] forecast loading status', props<{ loading: boolean }>());
export const UpdateForecast = createAction('[weather view] update city',props<{forecast: Forecast | null}>());
