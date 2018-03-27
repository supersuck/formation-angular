import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addItem(data: Item): void {
    console.log(data);
  }
}
