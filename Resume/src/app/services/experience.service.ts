import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  constructor(private http: HttpClient) { }

  public getJSON(): Observable<Array<Experience>> {
    return this.http.get<Array<Experience>>("assets/data/experience.json");
  }
}
