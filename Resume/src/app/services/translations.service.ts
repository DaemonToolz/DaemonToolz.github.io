import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import {  TranslationLanguage } from '../models/languages';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {
  public selected_lang: TranslationLanguage = TranslationLanguage.English;
  public translations: Map<string, string> = new Map();
  constructor(private http: HttpClient, @Inject(LOCALE_ID) private _locale: string) { 
    try {
      if(_locale.includes("fr")){
        this.selected_lang = TranslationLanguage.Français
      }
      /*
      if(_locale.includes("ja")){
        this.selected_lang = TranslationLanguage.日本語
      }

      if(_locale.includes("th")){
        this.selected_lang = TranslationLanguage.ไทย
      }
    */
      this.updateTranslations(this.selected_lang)
    } catch (ex){}
  }

  public updateTranslations(lang: TranslationLanguage): void {
    this.selected_lang = lang;
    const self = this;
    try {
      self.loadTranslation().subscribe(lines => {
        self.translations = lines;
      }, error => {
        if(TranslationLanguage.English !== lang) {
          this.updateTranslations(TranslationLanguage.English);
        }
      });
    } catch (ex) {

    }
  }


  public loadTranslation(): Observable<Map<string,string>> {
    return this.http.get<Map<string,string>>(`assets/translations/${this.selected_lang.toString()}/localization.json`);
  }

}
