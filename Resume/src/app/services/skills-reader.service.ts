import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsReaderService {
  constructor(private http: HttpClient) { }

  public getJSON(): Observable<Array<Section>> {
    return this.http.get<Array<Section>>("assets/data/skills.json");
  }
}
