import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filter, single, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: User
  url = 'http://localhost:3000/users/';
  userSubject: Subject<User> = new Subject<User>();
  constructor(private fire: AngularFirestore, private http: HttpClient) {
    this.user = {
      id: '',
      username: '',
      orders: []
    };
    this.updateUser(this.user);
   }


  login(username: string) {
    this.http.get<User>(this.url+username).subscribe(user => {
      console.log(user);
      this.user = user;
      this.userSubject.next(user)});
  }

  updateUser(user: User) {
    this.userSubject.next(user);
  }

  getUser() {
    return this.user;
  }

  logOut() {
    this.user = {
      id: '',
      username: '',
      orders: []
    };
    this.updateUser(this.user);
  }
}
