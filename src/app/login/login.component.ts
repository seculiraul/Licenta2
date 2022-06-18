import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  us!: User
  constructor(private userService: UserService) {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    this.userService.userSubject.subscribe(u => this.us = u);
   }

  ngOnInit(): void {
  }
  login() {
    const username = this.form.get('username')?.value;
    if(username === 'admin') {
      this.userService.login('1');
    } else {
      this.userService.login('2');
    }
  }
}
