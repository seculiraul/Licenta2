import { Injectable } from '@angular/core';
import { Produs } from './produs.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  currentOrder: Produs[] =[];
  constructor() { }


  addCurrentOrder(product: Produs) {
    this.currentOrder.push(product);
  }

  sdfsd() {
    console.log(this.currentOrder);
  }
}
