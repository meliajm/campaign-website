import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './components/bio/bio.component';
import { ContactComponent } from './components/contact/contact.component';
import { IssueComponent } from './components/issue/issue.component';
// import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: NavBarComponent
  // },
   {
    path: 'bio',
    component: BioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'issue',
    component: IssueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
