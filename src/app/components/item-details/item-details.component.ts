import {Component, OnInit} from '@angular/core';
import {IItem} from '../../interfaces/item';
import {ItemService} from '../../services/item/item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {CartService} from '../../services/cart/cart.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: any;
  currentUser: any;
  watching: number;

  constructor(
    private itemService: ItemService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    const id = activatedRoute.snapshot.params.id;
    itemService.loadItem(id).subscribe(item => {
      this.item = item;
    });
    this.watching = 0;
  }

  ngOnInit(): void {
    // @ts-ignore
    this.currentUser = this.authService.currentUser$.source.value;
    this.watching = Math.floor((Math.random() * 25) + 1);
  }

  removeItemHandler(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.itemService.removeItem(id).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  addToCartHandler(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.cartService.createCartItem(id).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  starHandler(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.itemService.star(id).subscribe({
      next: () => {
        this.router.navigate([`items`]);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}

