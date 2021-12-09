import { Component, OnInit } from '@angular/core';
import { User } from '../user-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  color: string;
  session: boolean = false;
  user :User[]
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'))? JSON.parse(sessionStorage.getItem('user')):[];
    this.session = this.user.length? true : false;
  }

  logout(){
    sessionStorage.removeItem('user');
    sessionStorage.clear();
    this.user=[];
    this.session = true;
  }

}
