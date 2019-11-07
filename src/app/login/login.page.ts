import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  constructor() { }
  
  ngOnInit() {}

  login() {

  }

  register() {
console.log(this.userRegister);
  }
}