import { Injectable } from '@angular/core';
import { products } from './data';
import { Produs } from './produs.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  produse: Produs[] = products.slice();

  constructor() { }
  getCategory() {
    return [... new Set(this.produse.map(produse => produse.categorie))];
  }

  getForCategory(categorie: string[]) {
    return categorie.length ? this.produse.filter(produs => categorie.includes(produs.categorie)) : this.getAllProducts();
  }

  getNewProducts(): Produs[] {
    return this.produse.filter(produs => produs.isNew === true);
  }

  getProductById(id: number): Produs | undefined{
    return this.produse.find(produs => produs.id === id.toString());
  }

  sortAZ(produse: Produs[]) {
   return produse.sort((produs1, produs2) => {
      if(produs1.nume > produs2.nume) {
       return 1;
      } else return -1;
   });
  }

  sortDefault(produse: Produs[]) {
    return produse.sort((produs1, produs2) => {
      if(produs1.id > produs2.id) {
       return 1;
      } else return -1;
   });
  }

  sortZA(produse: Produs[]) {
    return produse.sort((produs1, produs2) => {
       if(produs1.nume > produs2.nume) {
        return -1;
       } else return 1;
    });
   }

   sortPriceLow(produse: Produs[]) {
    return produse.sort((produs1, produs2) => {
      if(produs1.pret > produs2.pret) {
       return 1;
      } else return -1;
   });
   }

   sortPriceHigh(produse: Produs[]) {
    return produse.sort((produs1, produs2) => {
      if(produs1.pret > produs2.pret) {
       return -1;
      } else return 1;
   });
   }
  
  getAllProducts() {
    return this.produse;
  }
}
