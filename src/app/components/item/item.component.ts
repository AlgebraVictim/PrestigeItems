import {Component, Input, OnInit} from '@angular/core';
import {IItem} from '../../interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // It should have type IItem
  @Input() item: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
