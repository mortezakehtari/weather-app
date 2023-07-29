import { Action, createReducer, on } from '@ngrx/store';
import * as SearchLoadingActions from '../actions/search-loading.action'


export interface SearchLoadingState {
  loading: boolean
}

const initialLoadingState: SearchLoadingState = {
  loading: false
}

const _searchLoadingReducer = createReducer(
  initialLoadingState,
  on(SearchLoadingActions.SearchLoading, (state, { loading }) => ({...state, loading : loading})),
)

export function SearchLoadingReducer(state:  SearchLoadingState | undefined, action: Action) {
  return _searchLoadingReducer(state, action);
}
