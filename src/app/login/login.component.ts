import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username:string;
  Password:string;

  constructor() { }

  ngOnInit() {
    this.Username = "check";
  }
  checkLogin() {
    console.log('Username Password' , this.Username);
  }

}
