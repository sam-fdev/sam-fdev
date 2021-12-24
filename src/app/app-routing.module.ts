import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './profile/about/about.component';
import { ContactComponent } from './profile/contact/contact.component';
import { IntroComponent } from './profile/intro/intro.component';
import { ProjectComponent } from './profile/project/project.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'about', component: AboutComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
