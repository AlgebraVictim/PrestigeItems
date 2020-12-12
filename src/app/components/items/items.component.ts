import {Component, Input, OnInit} from '@angular/core';
import {IItem} from '../../interfaces/item';
import {ItemService} from '../../services/item/item.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() show: boolean;
  itemsList: IItem[];
  itemsListCopy: IItem[];
  isLogged: any;
  onlyItems: boolean;
  onlyGames: boolean;
  onlyGamesArr: IItem[];
  onlyItemsArr: IItem[];

  constructor(private itemService: ItemService, private authService: AuthService) {
    this.itemsList = [];
    this.itemsListCopy = [];
    this.onlyGamesArr = [];
    this.onlyItemsArr = [];
    this.isLogged = this.authService.currentUser$;
    this.onlyItems = false;
    this.onlyGames = false;
    this.show = true;
  }

  ngOnInit(): void {
    this.itemService.loadItems().subscribe(itemsList => {
      this.itemsList = itemsList;
      this.itemsListCopy = itemsList;
      // @ts-ignore
      this.onlyItemsArr = itemsList.filter(item => item.category === 'items');
      // @ts-ignore
      this.onlyGamesArr = itemsList.filter(item => item.category === 'games');
    });
  }

  toggleOnlyItems(): void {
    this.itemsList = !this.onlyItems ? this.onlyItemsArr : this.itemsListCopy;
    this.onlyItems = !this.onlyItems;
    if (this.onlyItems) {
      this.onlyGames = false;
    }
  }

  toggleOnlyGames(): void {
    this.itemsList = !this.onlyGames ? this.onlyGamesArr : this.itemsListCopy;
    this.onlyGames = !this.onlyGames;
    if (this.onlyGames) {
      this.onlyItems = false;
    }
  }
}
