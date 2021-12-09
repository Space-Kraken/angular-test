import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  id: number;
  email: string;
  password: string;
  userName: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  users: User[] = [
    {
      id: 1,
      email: 'fake.user@gmail.com',
      password: '123',
      userName: 'Fake'
    },
    {
      id: 2,
      email: 'ernestocano@gmail.com',
      password: '321',
      userName: 'Ernesto'
    },
    {
      id: 3,
      email: 'admin@gmail.com',
      password: 'admin',
      userName: 'Admin'
    },
  ];
  constructor(public router: Router) { }
  authenticate(email: string, password: string) {
    const user = this.users.find((u)=> u.email === email && u.password === password);
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/']);
    }
  }

  addUser(user: User) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
