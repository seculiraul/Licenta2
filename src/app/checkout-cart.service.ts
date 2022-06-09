import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderSummary } from './OrderSummary.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutCartService {

  currentOrderValues!: OrderSummary;
  constructor() { }


  setCurentOrder(orderSummary: OrderSummary) {
    this.currentOrderValues = orderSummary;
  }

  getCrtOrdValues() {
    return this.currentOrderValues;
  }

}
