import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataService } from '../data.service';
import { Produs } from '../produs.model';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @ViewChild('div') inputs!: ElementRef;
  selected = false;
  categorii!: string[];
  produse!: Produs[];
  sub = new Subject<Produs[]>();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.produse = this.dataService.getAllProducts();
    this.categorii = this.dataService.getCategory();
    this.sub.subscribe(prod => this.produse = prod);
    this.dataService.getItems().subscribe(item => console.log(item.length));
  }


  sort(val: any) {
    const sortBy = val?.value;
    if(sortBy === 'nameAz') {
      this.dataService.sortAZ(this.produse);
    } else if(sortBy === 'nameZa') {
      this.dataService.sortZA(this.produse);
    } else if(sortBy === 'priceLow') {
      this.dataService.sortPriceLow(this.produse);
    } else if(sortBy === 'priceHigh') {
      this.dataService.sortPriceHigh(this.produse);
    } else if(sortBy === 'default'){
      this.produse = this.dataService.sortDefault(this.produse);
    }

    console.log(this.produse);
    this.sub.next(this.produse);
  }

  addClass() {
    return this.selected = !this.selected;
  }


  filter() {
    const isChecked = this.inputs.nativeElement.childNodes[0].checked;
    let input =[]
    if(isChecked){
      input = this.inputs.nativeElement.childNodes[0].value
    }
    const filt = this.dataService.getForCategory(input);
    this.sub.next(filt);
  } 
}
