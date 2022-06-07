import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderItems!: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderItems = this.orderService.getCurrentOrder();
  }

}
