import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { COLLECTION } from '../../../core/services/collection';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  collection: Item[];
  constructor(private collectionService: CollectionService) {

  }

  ngOnInit() {
    this.collectionService.collection$.subscribe((data) => {
      console.log(data);
      this.collection = data;
    });
  }

}
