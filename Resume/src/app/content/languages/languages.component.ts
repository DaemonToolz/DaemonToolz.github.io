import { Component, OnInit } from '@angular/core';
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
  public languages: Language[] = [];
  constructor(private langService: LanguagesService, public translator: TranslationsService) {
    const self = this;
    langService.getJSON().subscribe(data => {
      self.languages = data;
    });
  }

  ngOnInit(): void {
  }

}
