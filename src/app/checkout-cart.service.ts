import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderService } from './order.service';
import { OrderSummary } from './OrderSummary.model';
import { User } from './user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutCartService {

  user!: User;
  currentOrderValues!: OrderSummary;
  constructor(private userService: UserService, private orderService: OrderService) { }


  setCurentOrder(orderSummary: OrderSummary) {
    this.currentOrderValues = orderSummary;
  }

  getCrtOrdValues() {
    return this.currentOrderValues;
  }

  addOrderToUser(total: number , ship: number) {
   /* this.userService.getUser().subscribe(user => {
      console.log(user);
      this.user = user});
   // console.log(this.user);
    if(this.user.id) {
      this.user.orders.push({obiecte: this.orderService.getCurrentOrder(), total: total, transport: ship});
    }*/
  }



}
