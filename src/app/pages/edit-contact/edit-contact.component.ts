import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./_edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact: Contact
  subscription: Subscription

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      console.log(data.contact)
      this.contact = data.contact || this.contactService.getEmptyContact()
    })
  }

  async onSaveContact() {
    await this.contactService.saveContact({ ...this.contact })
    this.router.navigateByUrl(this.contact._id ? `/contact/${this.contact._id}` : 'contact')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
