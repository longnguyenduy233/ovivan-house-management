import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { extModules, metaReducers } from './reducer';
import { SessionStoreModule } from './session-store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SessionStoreModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    // Instrumentation must be imported after importing StoreModule
    extModules
  ]
})
export class RootStoreModule { }
