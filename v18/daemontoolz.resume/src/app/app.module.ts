import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './content/about/about.component';
import { NotFoundComponent } from './content/errors/not-found/not-found.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { HomeComponent } from './content/home/home.component';
import { LanguagesComponent } from './content/languages/languages.component';
import { LinksComponent } from './content/links/links.component';
import { SkillsComponent } from './content/skills/skills.component';
import { StudiesComponent } from './content/studies/studies.component';
import { MenuComponent } from './menu/menu.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

export function createTranslateLoader(http: HttpBackend) {
  return new TranslateHttpLoader(new HttpClient(http), 'assets/i18n/', '.json');
}

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
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpBackend]
      }
    }),
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTabsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatToolbarModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync(),
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
