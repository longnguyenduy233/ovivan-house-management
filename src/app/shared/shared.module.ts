import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { TableComponent } from './components/table/table.component';
import { SortableDirective } from './directives/sortable.directive';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    SortableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgBootstrapModule,
    TableComponent,
    NgSelectModule ,
    FormsModule
  ]
})
export class SharedModule { }
