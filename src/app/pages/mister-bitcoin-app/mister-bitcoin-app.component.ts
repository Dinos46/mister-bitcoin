import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { FilterBy } from 'src/app/models/filter-by.model';


@Component({
  selector: 'mister-bitcoin-app',
  templateUrl: './mister-bitcoin-app.component.html',
  styleUrls: ['./_mister-bitcoin-app.component.scss']
})
export class MisterBitcoinAppComponent implements OnInit {
  // contacts: Contact[];
  contacts$: Observable<Contact[]>
  filterBy: FilterBy = { term: '' }

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$
    // this.contactService.contacts$.subscribe(contacts => {
    //   this.contacts = contacts;
    // })
    this.contactService.query();
  }

  onSetFilter(filterBy: FilterBy) {
    this.filterBy = filterBy
    this.contactService.query(this.filterBy) 
  }


}
