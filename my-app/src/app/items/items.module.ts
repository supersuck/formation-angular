import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './componants/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { AddItemComponent } from './containers/add-item/add-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule,
  ],
  declarations: [
    ListItemsComponent,
    ItemComponent,
    AddItemComponent,
  ],
  exports: [
    ListItemsComponent
  ]
})
export class ItemsModule { }
