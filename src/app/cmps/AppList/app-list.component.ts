import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./_app-list.component.scss']
})
export class AppListComponent implements OnInit {
  @Input() contacts: Contact[];
   
  constructor() { }

  ngOnInit(): void {
    // console.log('List',this.contacts)
  }

}
