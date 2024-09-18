import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../models/languages';
import { Section } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<Array<Language>> {
    return this.http.get<Array<Language>>("assets/data/languages.json");
  }
}
