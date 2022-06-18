import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinalOrder } from '../finalOrder.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user!: User
  currentOrder!: FinalOrder
  constructor(private userSv: UserService, private router: Router) {
    this.user = this.userSv.getUser();
   }

  ngOnInit(): void {
  }

  getOrderDetails(id: string) {
    console.log(this.currentOrder);
  }

  getUser() {
    console.log(this.currentOrder);
  }

  logOut() {
    this.userSv.logOut();
    this.router.navigate(['/']);
  }

}
