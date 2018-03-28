import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { COLLECTION } from '../collection';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CollectionService {
  itemsCollection: AngularFirestoreCollection<Item>;
  private _collection$: Observable<Item[]>;
  // Seul Flux Observable :
  // private _collection$: Subject<Item[]> = new Subject<Item[]>();
  // private _collection$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>();

  constructor(
    private afs: AngularFirestore,
    // private http: HttpClient
  ) {
    this.itemsCollection = afs.collection<Item>('collection');
    this._collection$ = this.itemsCollection.valueChanges();
    // this._collection$ = this.http.get('MON_URL_API');
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
