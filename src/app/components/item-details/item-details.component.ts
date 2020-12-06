import {Component, OnInit} from '@angular/core';
import {IItem} from '../../interfaces/item';
import {ItemService} from '../../services/item/item.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: any;

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute
  ) {
    const id = activatedRoute.snapshot.params.id;
    itemService.loadItem(id).subscribe(item => {
      this.item = item;
    });
  }

  ngOnInit(): void {
  }

}
