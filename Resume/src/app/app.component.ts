import { Component } from '@angular/core';
import { TranslationsService } from './services/translations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private translator: TranslationsService){
  
  }
}
