import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { StateDirective } from './directives/state/state.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
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
