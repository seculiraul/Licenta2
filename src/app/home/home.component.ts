import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { OrderService } from '../order.service';
import { Produs } from '../produs.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newProducts: Produs[] =[];
  constructor(private produsService: DataService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.newProducts = this.produsService.getNewProducts();
  }
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;

  addToCart(product: Produs) {
    this.orderService.addCurrentOrder(product, 1);
  }

}
