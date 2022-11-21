import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootSelector, RootState } from 'src/app/root-store';

@Injectable({
  providedIn: 'root'
})
export class SessionFacadeService {

  constructor(
    private store: Store<RootState.default>
  ) { }
  
  get isLoggedIn$() {
    return this.store.select(RootSelector.SessionSelector.tokenSelector);
  }
}
