import {Component, OnInit} from '@angular/core';
import {PurchasesService} from '../../services/purchases/purchases.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchasesList: any[];
  show: boolean;

  constructor(private purchasesService: PurchasesService, private router: Router) {
    this.purchasesList = [];
    this.show = false;
  }

  ngOnInit(): void {
    this.purchasesService.loadPurchases().subscribe((items) => {
      this.purchasesList = items;
    });
  }

  toggleShowClick(): void {
    this.show = !this.show;
  }
}
