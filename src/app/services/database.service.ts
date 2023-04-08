import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Experiences } from '../interfaces/experiences';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  private apiExperienceUrl = "http://localhost:3000/experiences";
  
  getExperience(): Observable<Experiences[]> {

    return this.http.get<Experiences[]>(this.apiExperienceUrl);

  }

  findExperience(id: number): Observable<Experiences[]> {

    return this.http.get<Experiences[]>(this.apiExperienceUrl);

  }


}
