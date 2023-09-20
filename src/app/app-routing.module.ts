import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume/resume.component';
import { AboutComponent } from './about/about/about.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { ContactComponent } from './contact/contact/contact.component';
import { NotFoundedComponent } from './notfounded/not-founded/not-founded.component';

const routes: Routes = [
  { path: '',redirectTo: 'about', pathMatch: 'full'  },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundedComponent}
     
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
