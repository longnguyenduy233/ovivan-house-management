import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootAction, RootSelector, RootState } from 'src/app/root-store';

@Injectable()
export class HeaderFacadeService {

  constructor(
    private store: Store<RootState.default>
  ) { }

  get isLoading$() {
    return this.store.select(state => state.session.isLoading);
  }

  get session$() {
    return this.store.select(state => state.session.session);
  }

  get isLoggedIn$() {
    return this.store.select(RootSelector.SessionSelector.tokenSelector);
  }

  get error$() {
    return this.store.select(RootSelector.SessionSelector.errorSelector);
  }

  logout() {
    this.store.dispatch(RootAction.SessionAction.SessionActions.Logout());
  }

  login(username: string, password: string) {
    this.store.dispatch(RootAction.SessionAction.SessionActions.LoginBegin({username, password}));
  }
}
