import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../collection/collection.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';


@Injectable()
export class EditResolverService implements Resolve<Observable<Item>> {

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) {

  }

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    const id = activatedRoute.paramMap.get('id');
    return this.collectionService.getItem(id).take(1).map((data) => {
      if (data) {
        return data;
      } else {
        this.router.navigate(['/items/list']);
        return null;
      }
    });
  }
}
