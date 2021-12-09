import { Component, OnInit } from '@angular/core';
import { User, UserApiService } from "../user-api.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  users: User[];
  email: string='';
  password: string='';
  userName: string='';

  constructor(public debbugData: UserApiService) {
  }
  
  ngOnInit(): void {
    this.users = this.debbugData.getUsers();
  }

  login() {
    this.debbugData.authenticate(this.email, this.password);
  }

}
