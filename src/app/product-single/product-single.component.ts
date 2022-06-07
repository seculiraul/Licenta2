import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { OrderService } from '../order.service';
import { Produs } from '../produs.model';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {

  id!: number;
  produs!: Produs;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        this.produs = this.dataService.getProductById(this.id)!;
      }
    )
  }


  addToCart(quantity: any) {
    this.orderService.addCurrentOrder(this.produs, +quantity.value);
  }
}
