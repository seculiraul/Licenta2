import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Produs } from '../produs.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
newProducts: Produs[] =[];
  constructor(private produsService: DataService) { }

  ngOnInit(): void {
    this.newProducts = this.produsService.getNewProducts();
  }
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;

}
