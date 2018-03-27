import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { Page404Module } from './page404/page404.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    Page404Module,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
