import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';

import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './content/about/about.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { StudiesComponent } from './content/studies/studies.component';
import { LanguagesComponent } from './content/languages/languages.component';
import { LinksComponent } from './content/links/links.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './content/errors/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    StudiesComponent,
    LanguagesComponent,
    LinksComponent,
    GalleryComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
