import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HeaderPageComponent } from './components/partials/header-page/header-page.component';
import { ModalComponent } from './components/partials/modal/modal.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { CartComponent } from './components/shops/cart/cart.component';
import { ShopComponent } from './components/shops/shop/shop.component';
import { AddProductComponent } from './components/shops/add-product/add-product.component';
import { EditProductComponent } from './components/shops/edit-product/edit-product.component';
import { SingleProductComponent } from './components/shops/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    HeaderPageComponent,
    ModalComponent,
    NotFoundComponent,
    CartComponent,
    ShopComponent,
    AddProductComponent,
    EditProductComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
