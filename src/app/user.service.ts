import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filter, single, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: User
  userSubject: Subject<User> = new Subject<User>();
  constructor(private fire: AngularFirestore) {
    this.user = {
      id: '',
      username: '',
      orders: []
    };
    this.updateUser(this.user);
   }


  login(username: string) {
    let allUsers: User[] =[]
   this.fire.collection<User>('Users').valueChanges()
   .subscribe(users => allUsers = users);
   this.updateUser(allUsers.filter(user => user.username === username)[0]);
  }

  updateUser(user: User) {
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject;
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
