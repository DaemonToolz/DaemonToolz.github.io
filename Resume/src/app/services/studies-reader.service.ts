import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Study } from '../models/studies';

@Injectable({
  providedIn: 'root'
})
export class StudiesReaderService {
  constructor(private http: HttpClient) { }

  public getJSON(): Observable<Array<Study>> {
    return this.http.get<Array<Study>>("assets/data/studies.json");
  }
}
