import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CheckoutCartService } from '../checkout-cart.service';
import { OrderService } from '../order.service';
import { OrderSummary } from '../OrderSummary.model';
import { FinalOrder } from '../finalOrder.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSummary!: OrderSummary
  constructor(private checkoutService: CheckoutCartService) { }

  ngOnInit(): void {
    this.orderSummary = this.checkoutService.getCrtOrdValues();
  }

  addOrderToUser() {
    console.log('adaugat');
   this.checkoutService.addOrderToUser(this.orderSummary.total, this.orderSummary.shipping);
  }


}
