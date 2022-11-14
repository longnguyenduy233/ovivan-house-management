import { ActionReducer, MetaReducer } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { SessionReducer } from './session-store';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('action ::::::::', action);
    console.log('state before ::::::::', state);
    const result = reducer(state, action);
    console.log('state after ::::::::', result);
    return result;
  };
}

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [debug]
  : [];

export const extModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 25
  })
];

export {
  SessionReducer
};