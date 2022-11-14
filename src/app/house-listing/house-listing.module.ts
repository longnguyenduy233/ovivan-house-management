import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseListingRoutingModule } from './house-listing-routing.module';
import { HouseListingComponent } from './house-listing.component';
import { HouseModelComponent } from './components/house-model/house-model.component';
import { SharedModule } from '../shared/shared.module';
import { HouseListComponent } from './components/house-list/house-list.component';


@NgModule({
  declarations: [
    HouseListingComponent,
    HouseModelComponent,
    HouseListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HouseListingRoutingModule,
  ]
})
export class HouseListingModule { }
