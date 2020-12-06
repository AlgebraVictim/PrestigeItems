import {Component, OnInit} from '@angular/core';
import {IItem} from '../../interfaces/item';
import {ItemService} from '../../services/item/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemsList: IItem[];

  constructor(private itemService: ItemService) {
    this.itemsList = [];
  }

  ngOnInit(): void {
    this.itemService.loadItems().subscribe(itemsList => {
      this.itemsList = itemsList;
    });
  }

}
