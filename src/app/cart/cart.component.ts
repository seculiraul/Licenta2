import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutCartService } from '../checkout-cart.service';
import { Order } from '../order.model';
import { OrderService } from '../order.service';
import { OrderSummary } from '../OrderSummary.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderItems!: Order[];
  total = 0;
  shippingTax = 5;
  constructor(private orderService: OrderService, private checkoutService: CheckoutCartService, private router: Router) { }

  ngOnInit(): void {
    this.orderItems = this.orderService.getCurrentOrder();
    this.total = this.orderItems.reduce((accumulator, current) => {
     return accumulator + (current.product.pret * current.quantity)
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
    this.router.navigate(['/checkout']);
  }

}
