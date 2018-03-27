import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Page404Component } from './page404/page404/page404.component';
import { ListItemsComponent } from './items/containers/list-items/list-items.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListItemsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // redirect to home when no url precised
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // redirect to page 404 for other urls
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  declarations: [],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
