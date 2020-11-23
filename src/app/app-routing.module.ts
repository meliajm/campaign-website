import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './components/bio/bio.component';
import { ContactComponent } from './components/contact/contact.component';
import { IssueComponent } from './components/issue/issue.component';
<<<<<<< HEAD
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
=======
// import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: NavBarComponent
  // },
   {
>>>>>>> 63feb4fa794ce0c39622c38be6b9d27a32ab616f
    path: 'bio',
    component: BioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
<<<<<<< HEAD
    path: 'issues',
=======
    path: 'issue',
>>>>>>> 63feb4fa794ce0c39622c38be6b9d27a32ab616f
    component: IssueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
