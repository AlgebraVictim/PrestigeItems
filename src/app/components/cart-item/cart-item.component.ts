import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {
  }

  handleDeleteClick(): void {
    this.cartService.removeCartItem(this.cartItem._id).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: err => {
          console.error(err);
        }
      }
    );
  }
}
