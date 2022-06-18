import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutCartService } from '../checkout-cart.service';
import { Order } from '../order.model';
import { OrderService } from '../order.service';
import { OrderSummary } from '../OrderSummary.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderItems!: Order[];
  total = 0;
  shippingTax = 5;
  constructor(private orderService: OrderService, private checkoutService: CheckoutCartService, private router: Router, private http: HttpClient,
    private userSv: UserService) { }

  ngOnInit(): void {
    this.orderItems = this.orderService.getCurrentOrder();
    this.total = this.orderItems.reduce((accumulator, current) => {
     return accumulator + (+current.product.pret * current.quantity)
    }, 0);
    this.shippingTax = this.total < 39 ? 5 : 0;
  }

  toCheckout() {
    const orderSummary: OrderSummary = {
      products: this.orderItems.map(item => [item.product.nume, item.quantity]),
      total: this.total,
      shipping: this.shippingTax
    };
    this.checkoutService.setCurentOrder(orderSummary);
    const user = this.userSv.getUser();
    const lastOrderId =  +user.orders.length;
    user.orders.push(
      {
        id: (lastOrderId + 1).toString(),
        obiecte: this.orderItems,
        total: this.total,
        transport: this.shippingTax
    });
    this.http.put('http://localhost:3000/users', user);
    console.log(user);
    this.router.navigate(['/checkout']);
  }

}
