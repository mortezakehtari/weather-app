import { createAction, props } from "@ngrx/store";

export const SearchLoading = createAction('[loading] search loading status', props<{ loading: boolean }>());
