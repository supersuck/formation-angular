import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { COLLECTION } from '../collection';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionService {
  itemsCollection: AngularFirestoreCollection<Item>;
  private _collection$: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this._collection$ = this.itemsCollection.valueChanges();
  }

  // get collection
  get collection$(): Observable<Item[]> {
    return this._collection$;
  }

  // set collection
  set collection$(collection: Observable<Item[]>) {
    this._collection$ = collection;
  }

  // add Item

  // update Item

  // delete Item
}
