import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-preview',
  templateUrl: './app-preview.component.html',
  styleUrls: ['./_app-preview.component.scss']
})
export class AppPreviewComponent implements OnInit {
  @Input() contact: Contact;
  
  constructor() { }
  
  ngOnInit(): void {
    
  }

}
