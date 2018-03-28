import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { COLLECTION } from '../collection';

@Injectable()
export class CollectionService {
  private _collection: Item[];

  constructor() {
    this._collection = COLLECTION;
  }

  // get collection
  get collection(): Item[] {
    return this._collection;
  }

  // set collection
  set collection(collection: Item[]) {
    this._collection = collection;
  }

  // add Item

  // update Item

  // delete Item
}
