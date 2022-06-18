import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CheckoutCartService } from '../checkout-cart.service';
import { OrderService } from '../order.service';
import { OrderSummary } from '../OrderSummary.model';
import { FinalOrder } from '../finalOrder.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSummary!: OrderSummary
  constructor(private checkoutService: CheckoutCartService, private router: Router, private userSv: UserService) { }

  ngOnInit(): void {
    this.orderSummary = this.checkoutService.getCrtOrdValues();
  }

  addOrderToUser() {
   if(this.userSv.getUser().username === '') {
    this.router.navigate(['/']);
   } else {
    console.log('adaugat');
    this.checkoutService.addOrderToUser(this.orderSummary.total, this.orderSummary.shipping);
   this.router.navigate(['/order-placed']);
   }
  }


}
