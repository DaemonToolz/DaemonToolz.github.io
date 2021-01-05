import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslationsService } from './services/translations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translator: TranslationsService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(`avira`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logos/avira.logo.svg`));
    this.matIconRegistry.addSvgIcon(`eurotunnel`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logos/eurotunnel.logo.svg`));
    this.matIconRegistry.addSvgIcon(`open`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logos/open.logo.svg`));
    this.matIconRegistry.addSvgIcon(`thales`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logos/thales.logo.svg`));
  }
}
