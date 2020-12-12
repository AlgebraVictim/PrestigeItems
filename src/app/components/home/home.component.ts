import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/item/item.service';
import {IItem} from '../../interfaces/item';
import {AuthService} from '../../services/auth/auth.service';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemsList: IItem[];
  cartItems: [];
  isLogged: any;

  constructor(private itemService: ItemService, private authService: AuthService, private cartService: CartService) {
    this.itemsList = [];
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.isLogged = this.authService.currentUser$;
    this.itemService.loadItems().subscribe(items => {
      this.itemsList = items;
    });
    this.cartService.loadCart().subscribe(items => {
      this.cartItems = items;
    });
  }
}
