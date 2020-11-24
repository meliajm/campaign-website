import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './components/bio/bio.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GoalsComponent } from './components/goals/goals.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IssueComponent } from './components/issue/issue.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IssueComponent,
    BioComponent,
    ContactComponent,
    LandingPageComponent,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
