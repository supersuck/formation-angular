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
  addItem(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }

  getItem(id: string): Observable<Item> {
    const item = this.afs.doc<Item>(`collection/${id}`).valueChanges();
    return item;
  }

  // update Item
  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }

  // delete Item
  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
  }

  // récupérer id passé dans lurl via le router
  // après avoir récupéré les données grace à méthode getItem de ce service
  // envoyer les données à formComponent
}
