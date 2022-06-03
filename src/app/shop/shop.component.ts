import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Produs } from '../produs.model';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categorii!: string[];
  produse!: Produs[];
  
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.categorii = this.dataService.getCategory();
    this.produse = this.dataService.getAllProducts();
  }
}
