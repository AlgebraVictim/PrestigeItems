import {Component, OnInit} from '@angular/core';
import {IItem} from '../../interfaces/item';
import {ItemService} from '../../services/item/item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: any;

  constructor(
    private itemService: ItemService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = activatedRoute.snapshot.params.id;
    itemService.loadItem(id).subscribe(item => {
      this.item = item;
    });
  }

  ngOnInit(): void {
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
}

