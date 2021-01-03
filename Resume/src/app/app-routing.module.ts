import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { NotFoundComponent } from './content/errors/not-found/not-found.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { HomeComponent } from './content/home/home.component';
import { LanguagesComponent } from './content/languages/languages.component';
import { LinksComponent } from './content/links/links.component';
import { SkillsComponent } from './content/skills/skills.component';
import { StudiesComponent } from './content/studies/studies.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'skills', component:SkillsComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'contacts', component:LinksComponent},
  {path:'studies', component:StudiesComponent},
  {path:'languages', component:LanguagesComponent},
  {path:'gallery', component:GalleryComponent},
  
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
