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
  }

  getForCategory(categorie: string) {
    return this.produse.filter(produs => produs.categorie === categorie);
  }

  getNewProducts(): Produs[] {
    return this.produse.filter(produs => produs.isNew === true);
  }

  getProductById(id: number): Produs | undefined {
    return this.produse.find(produs => produs.id === id.toString());
  }
}
