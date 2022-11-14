import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SortableDirective } from '../../directives/sortable.directive';
import { compare, SortEvent } from '../../models/table-sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;
  @Input() columns;
  @Input() tableDataOriginal;

  tableData = [];

  constructor() { }

  ngOnInit(): void {
    this.tableData = this.tableDataOriginal;
  }

  onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		// sorting countries
		if (direction === '' || column === '') {
			this.tableData = this.tableDataOriginal;
		} else {
			this.tableData = [...this.tableDataOriginal].sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});
		}
	}

}
