// Database para todos los métodos http: GET, POST, DELETE, UPDATE//

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

  addExperience(newExperience: Experiences): Observable<Experiences>{
    return this.http.post<Experiences>(this.apiExperienceUrl, newExperience, httpOptions)
  }

  editExperience(experience: Experiences) : Observable<Experiences> {

    const url = `${this.apiExperienceUrl}/${experience.id}`;
    return this.http.put<Experiences>(url,experience,httpOptions);
    
  }

  
  deleteExperience(experience: Experiences ): Observable<Experiences> {
    const url = `${this.apiExperienceUrl}/${experience.id}`
    return this.http.delete<Experiences>(url);
  }

}
