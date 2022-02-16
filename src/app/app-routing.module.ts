import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { AddProductComponent } from './components/shops/add-product/add-product.component';
import { CartComponent } from './components/shops/cart/cart.component';
import { EditProductComponent } from './components/shops/edit-product/edit-product.component';
import { ShopComponent } from './components/shops/shop/shop.component';
import { SingleProductComponent } from './components/shops/single-product/single-product.component';

const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'single-product/:id', component: SingleProductComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
