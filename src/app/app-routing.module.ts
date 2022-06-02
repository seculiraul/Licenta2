import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSingleComponent } from './product-single/product-single.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"product-single", component:ProductSingleComponent },
  { path:"checkout", component:CheckoutComponent },
  { path:"cart", component:CartComponent },
  { path:"shop", component:ShopComponent },
  { path:"dashboard", component:DashboardComponent },
  { path:"product-single/:id", component:ProductSingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
