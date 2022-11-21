import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
