import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenGuard } from '../core/guards/authen.guard';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseModelComponent } from './components/house-model/house-model.component';
import { HouseListingComponent } from './house-listing.component';

const routes: Routes = [
  {
    path: '',
    component: HouseListingComponent,
    children: [
      {
        path: '',
        component: HouseListComponent
      },
      {
        path: 'create',
        component: HouseModelComponent,
        canActivate: [AuthenGuard]
      },
      {
        path: 'edit/:id',
        component: HouseModelComponent,
        canActivate: [AuthenGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseListingRoutingModule { }
