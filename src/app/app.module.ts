import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {UsersComponent} from './components/users/users.component';
import {UserService} from './services/user/user.service';
import {ItemComponent} from './components/item/item.component';
import {ItemService} from './services/item/item.service';
import { ItemsComponent } from './components/items/items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import {AuthGuardGuard} from './guards/auth-guard.guard';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import {CartService} from './services/cart/cart.service';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import {CommonModule} from '@angular/common';
import {PurchasesService} from './services/purchases/purchases.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    UsersComponent,
    ItemComponent,
    ItemsComponent,
    NotFoundComponent,
    CreateItemComponent,
    ItemDetailsComponent,
    CartItemComponent,
    CartComponent,
    EditItemComponent,
    HomeComponent,
    FooterComponent,
    PurchasesComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    AuthService,
    UserService,
    ItemService,
    CartService,
    AuthGuardGuard,
    PurchasesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
