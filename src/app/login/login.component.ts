import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
   }

  ngOnInit(): void {
  }
  loginGoogle(){

  }

  login() {
    console.log(this.form);
  }

}
