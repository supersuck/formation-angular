import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Page404Component } from './page404/page404/page404.component';

const appRoutes: Routes = [
  // redirect to home when no url precised
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'items',
    loadChildren: 'app/items/items.module#ItemsModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules // https://angular.io/guide/router
      }
    )
    // other imports here
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
