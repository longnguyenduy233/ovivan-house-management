import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { rotate, SortDirection, SortEvent } from '../models/table-sort';

@Directive({
  selector: 'th[sortable]',
  host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	}
})
export class SortableDirective {
  @Input() sortable: string = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();

  constructor() { }

  rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}

}
