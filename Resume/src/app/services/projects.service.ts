import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<Array<Project>> {
    return this.http.get<Array<Project>>("assets/data/projects.json");
  }
}


