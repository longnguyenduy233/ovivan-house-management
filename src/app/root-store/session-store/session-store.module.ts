import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, stateName } from './reducer';
import { SessionStoreEffect } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(stateName, reducer),
    EffectsModule.forFeature([SessionStoreEffect]),
  ]
})
export class SessionStoreModule { }
