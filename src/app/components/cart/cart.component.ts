import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemsList: any[];

  constructor(private cartService: CartService, private router: Router,
              private userService: UserService, private authService: AuthService) {
    this.cartItemsList = [];
  }

  ngOnInit(): void {
    this.cartService.loadCart().subscribe((cartItems) => {
      this.cartItemsList = cartItems;
    });
  }

  addFunds(): void {
    this.userService.addFunds(100).subscribe({
      next: () => {
        this.router.navigate(['/items']);
        this.authService.onSuccess('Successfully added funds.');
      },
      error: (err => {
        console.error(err);
      })
    });
  }

  handleCheckoutClick(): void {
    this.cartService.checkout(this.cartItemsList).subscribe({
      next: () => {
        this.router.navigate(['/items']);
        this.authService.onSuccess('You made a successful checkout!\nCheck purchases page!');
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
