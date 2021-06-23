import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterBy } from 'src/app/models/filter-by.model';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./_contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  @Input() filterBy: FilterBy
  @Output() setFilter = new EventEmitter<FilterBy>()
  filterByCopy: FilterBy

  constructor() {
    this.filterByCopy = { ...this.filterBy }
  }

  ngOnInit(): void {
  }

}
