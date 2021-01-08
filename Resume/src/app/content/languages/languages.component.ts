import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language, LanguageLevel } from 'src/app/models/languages';
import { LanguagesService } from 'src/app/services/languages.service';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  public LanguageLevel = LanguageLevel;
  public languages$: Observable<Language[]>;
  constructor(public langService: LanguagesService, public translator: TranslationsService) {
  }

  ngOnInit(): void {
    this.languages$ = this.langService.getJSON();
  }

  public translateLanguage(lang: string):string{
    return this.translator.translations[`languages.${lang}.key`];
  }

  public getLanguageFlag(lang: string):string{
    return `/assets/images/${lang}.flag.png`
  }

  public averageLevel(lang: Language): Number{
    return (lang.listening_level + lang.reading_level + lang.writing_level + lang.speaking_level) / 4 
  }

  public translateLanguageLevel(lang: string):string{
    return this.translator.translations[`languages.level.${lang}.key`];
  }

  public translateLanguageLevelEnum(lang: LanguageLevel):string{
    let key = "";
    if(lang === LanguageLevel.Beginner) key = "beginner"
    if(lang === LanguageLevel.Intermediate) key = "intermediate"
    if(lang === LanguageLevel.Fluent) key = "fluent"
    if(lang === LanguageLevel.Native) key = "native"
    return this.translator.translations[`languages.level.${key}.key`];
  }

  public averageLanguageLevel(lang: Language): LanguageLevel{
    let avg = (lang.listening_level + lang.reading_level + lang.writing_level + lang.speaking_level) / 4
    if(avg == 100) return LanguageLevel.Native
    if(avg >= 75) return LanguageLevel.Fluent
    if(avg >= 50) return LanguageLevel.Intermediate
    return  LanguageLevel.Beginner
  }


  public defineClass(lang: Language): string{
    let avg = (lang.listening_level + lang.reading_level + lang.writing_level + lang.speaking_level) / 4
    if(avg == 100) return 'native'
    if(avg >= 75) return 'fluent'
    if(avg >= 50) return 'intermediate'
    return 'beginner'
  }

}
