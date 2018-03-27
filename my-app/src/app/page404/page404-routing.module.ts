import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';


const appRoutes: Routes = [
  {
    path: '**',
    component: Page404Component
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
export class Page404RoutingModule { }
