import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ROUTING} from './app-routing';
import { HeaderComponent } from './header/header.component';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';


@NgModule({
  declarations: [
    AppComponent,
  HeaderComponent,
  VisionComponent,
  MissionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
