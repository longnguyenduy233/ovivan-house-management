import { createFeatureSelector, createSelector } from "@ngrx/store";
import { stateName } from "./reducer";
import { SessionState } from "./state";
import { get } from 'lodash';


export const sessionState = createFeatureSelector<SessionState>(stateName);
export const tokenSelector = createSelector(sessionState, state => {
  return get(state, 'session.token');
});
export const errorSelector = createSelector(sessionState, state => {
  return get(state, 'error');
});