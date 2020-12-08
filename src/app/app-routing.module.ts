import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {UsersComponent} from './components/users/users.component';
import {ItemsComponent} from './components/items/items.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CreateItemComponent} from './components/create-item/create-item.component';
import {AuthGuardGuard} from './guards/auth-guard.guard';
import {ItemDetailsComponent} from './components/item-details/item-details.component';
import {EditItemComponent} from './components/edit-item/edit-item.component';
import {CartComponent} from './components/cart/cart.component';
import {PurchasesComponent} from './components/purchases/purchases.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuardGuard],
    children: [
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      // We allow logged users access users' page
      {path: 'users', component: UsersComponent, data: {isLogged: true}},
      {path: 'items', pathMatch: 'full', component: ItemsComponent, data: {isLogged: true}},
      {path: 'item/details/:id', component: ItemDetailsComponent, data: {isLogged: true}},
      {path: 'items/edit/:id', component: EditItemComponent, data: {isLogged: true}},
      {path: 'items/create', component: CreateItemComponent, data: {isLogged: true}},
      {path: 'cart', component: CartComponent, data: {isLogged: true}},
      {path: 'purchases', component: PurchasesComponent, data: {isLogged: true}},
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
