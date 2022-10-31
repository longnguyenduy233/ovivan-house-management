import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseManagementRoutingModule } from './house-management-routing.module';
import { HouseManagementComponent } from './house-management.component';


@NgModule({
  declarations: [
    HouseManagementComponent
  ],
  imports: [
    CommonModule,
    HouseManagementRoutingModule
  ]
})
export class HouseManagementModule { }
