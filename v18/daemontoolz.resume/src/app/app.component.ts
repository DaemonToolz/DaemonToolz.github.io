import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { TranslationLanguage } from './models/languages';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translator: TranslateService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(`avira`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logos/avira.logo.svg`));
    this.matIconRegistry.addSvgIcon(`eurotunnel`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logos/eurotunnel.logo.svg`));
    this.matIconRegistry.addSvgIcon(`open`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logos/open.logo.svg`));
    this.matIconRegistry.addSvgIcon(`thales`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logos/thales.logo.svg`));
  }

  public get activeLang(){
    return `languages.${this.translator.currentLang ?? this.translator.defaultLang}.key`;
  }

  public selectLang(lang: string){
    this.translator.use(lang);
  }

}
