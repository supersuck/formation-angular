import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavComponent,
    StateDirective
  ],
  exports: [
    NavComponent,
    StateDirective
  ]
})
export class SharedModule { }
