import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./_signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = {
    name: ''
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    console.log(this.user)
    
  }
  onSignUp() {
    // console.log(this.user)
    this.userService.signUp(this.user)

  }
}
