import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItemService} from '../../services/item/item.service';
import {environment} from '../../../environments/environment';
import {IItem} from '../../interfaces/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemsList: IItem[];

  constructor(private itemService: ItemService) {
    this.itemsList = [];
  }

  ngOnInit(): void {
    this.itemService.loadItems().subscribe(items => {
      this.itemsList = items;
    });

  }

}
