// Servicio para CRUD //

import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Experiences } from '../interfaces/experiences';

import { map } from 'rxjs';

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

  private apiExperienceUrl = 
  "http://localhost:8080/api";
//  "http://localhost:3000/experiences";
  
  getExperience(): Observable<Experiences[]> {

    return this.http.get<Experiences[]>(this.apiExperienceUrl + "/experiencias/traer"
      //+ "/experiencias/traer");
    );

  }

  addExperience(newExperience: Experiences): Observable<Experiences>{
    return this.http.post<Experiences>(this.apiExperienceUrl + "/experiencias/agregar", newExperience, httpOptions).pipe(map(
      response => response as Experiences
    )
    )
  }

  editExperience(experience: Experiences) : Observable<Experiences> {

    const url = `${this.apiExperienceUrl}/experiencias/editar/${experience.id}`;
    return this.http.put<Experiences>(url,experience,httpOptions).pipe(map(
      response => response as Experiences
    )

    )
  }
  
  deleteExperience(experience: Experiences ): Observable<Experiences> {
    const url = `${this.apiExperienceUrl}/experiencias/borrar/${experience.id}`
    console.log('id Experiencia deleteExperience ' + experience.id)
    return this.http.delete<Experiences>(url);
  }



}
