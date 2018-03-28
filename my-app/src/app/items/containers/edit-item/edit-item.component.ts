import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item: Item;
  constructor(
    private collectionService: CollectionService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    // souscrire à params pour récupérer dans le router l'item transmis par mon resolve
    this.activatedRoute.data.subscribe((data) => {
      this.item = data['item'];
    });
  }

  update(item: Item): void {
    console.log(item);
    this.collectionService.update(item);
  }
}
