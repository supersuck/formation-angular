import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListItemsComponent
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
