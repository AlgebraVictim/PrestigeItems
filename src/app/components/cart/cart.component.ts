import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemsList: any[];

  constructor(private cartService: CartService, private router: Router) {
    this.cartItemsList = [];
  }

  ngOnInit(): void {
    this.cartService.loadCart().subscribe((cartItems) => {
      this.cartItemsList = cartItems;
    });
  }

  handleCheckoutClick(): void {
    this.cartService.checkout(this.cartItemsList).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
