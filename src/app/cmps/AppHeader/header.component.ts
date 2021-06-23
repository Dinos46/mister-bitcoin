import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Mister-Bitcoin';
  constructor() { }

  ngOnInit(): void {
  }

}
