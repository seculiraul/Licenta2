import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Produs } from '../produs.model';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {

  id!: number;
  produs!: Produs | undefined;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        this.produs = this.dataService.getProductById(this.id);
      }
    )
  }
}
