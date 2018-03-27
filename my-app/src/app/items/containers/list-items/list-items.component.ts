import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { COLLECTION } from '../../../core/services/collection';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  collection: Item[];
  constructor() { }

  ngOnInit() {
    this.collection = COLLECTION;
  }

}
