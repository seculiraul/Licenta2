import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CheckoutCartService } from '../checkout-cart.service';
import { OrderSummary } from '../OrderSummary.model';

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


}
