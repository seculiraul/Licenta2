import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Produs } from './produs.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  currentOrder: Order[] = [];
  constructor() { }


  addCurrentOrder(product: Produs, quantity: number) {
    const orderItem: Order = {
      product, quantity
    };
   this.currentOrder.push(orderItem);
  }

  getCurrentOrder() {
    return this.currentOrder.slice();
  }
}
