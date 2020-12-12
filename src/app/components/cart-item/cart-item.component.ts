import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;

  constructor(private cartService: CartService, private router: Router,
              private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  handleDeleteClick(): void {
    this.cartService.removeCartItem(this.cartItem._id).subscribe({
        next: () => {
          this.router.navigate(['/']);
          this.authService.onSuccess('Successfully removed an item!');
        },
        error: err => {
          console.error(err);
        }
      }
    );
  }
}
