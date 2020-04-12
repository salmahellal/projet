import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VisionComponent } from './vision/vision.component';
import { SlidesComponent } from './slides/slides.component';
import { MissionComponent } from './mission/mission.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VisionComponent,
    SlidesComponent,
    MissionComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
