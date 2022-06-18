import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { OrderService } from '../order.service';
import { Produs } from '../produs.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {

  id!: number;
  produs!: Produs;
  visible = '';
  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private userSv: UserService,
    private firebase: AngularFirestore) {
    this.visible = this.userSv.getUser().username === 'admin' ? 'visible' : 'hidden';

   }

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

  stergereProdus() {
    this.firebase.collection('Produse').doc(this.id.toString()).delete().then(()=> this.router.navigate(['/']));
    //this.router.navigate(['/'])
  }
}
