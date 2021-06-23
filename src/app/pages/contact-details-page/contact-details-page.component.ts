import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./_contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  contact: Contact
  subscription: Subscription
  random: number = Math.round(Date.now() % 100)

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onGoBack() {
    this.location.back()
  }

  async onRemove() {
    await this.contactService.deleteContact(this.contact._id)
    this.router.navigateByUrl('/')
  }
}
