import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
// import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./_home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user: User
  rate: any


  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) { }

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getLogedInUser()
    console.log(this.user)
    
    this.rate = await this.bitcoinService.getRate().toPromise()
  }
}
