import { Component, OnInit } from '@angular/core';
import { User } from '../user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User[]

  constructor() { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : []
    console.log(this.user);
  }
  
}
