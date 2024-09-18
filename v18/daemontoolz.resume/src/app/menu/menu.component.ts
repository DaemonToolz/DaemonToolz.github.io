import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationLanguage } from '../models/languages';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl:'./menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit, OnDestroy{
  public readonly title = 'Resume';
  public TranslationLanguage = TranslationLanguage;
  public clock! : Date; 
  private clockInterval?: any;

  public constructor(public translator: TranslateService){

  }

  ngOnInit() {
    this.clockInterval = setInterval(() => {
       this.clock = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.clockInterval);
  }

  public getEnumKeyByEnumValue<T extends {[index:string]:string}>(myEnum:T, enumValue:string):keyof T|null {
    let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : null;
  }

  public switchTo(lang : string){
    //this.translator.updateTranslations(TranslationLanguage[lang]);
  }
}

