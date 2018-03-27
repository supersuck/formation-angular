import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { Page404RoutingModule } from './page404-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Page404RoutingModule,
  ],
  declarations: [
    Page404Component
  ],
  exports: [
  ]
})
export class Page404Module { }
