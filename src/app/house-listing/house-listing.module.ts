import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseListingRoutingModule } from './house-listing-routing.module';
import { HouseListingComponent } from './house-listing.component';


@NgModule({
  declarations: [
    HouseListingComponent
  ],
  imports: [
    CommonModule,
    HouseListingRoutingModule
  ]
})
export class HouseListingModule { }
