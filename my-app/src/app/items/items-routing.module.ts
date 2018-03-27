import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddItemComponent } from './containers/add-item/add-item.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListItemsComponent
  },
  {
    path: 'add',
    component: AddItemComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    ),
  ],
  declarations: [],
  exports: [
    RouterModule,
  ]
})
export class ItemsRoutingModule { }
