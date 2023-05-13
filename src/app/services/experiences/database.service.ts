// Servicio para CRUD //

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { About, Experiences } from '../../interfaces/interfaces';

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

  private apiExperienceUrl = "https://proyectoargprogrbackend.onrender.com/api";
  private apiPrueba = "http://localhost:3000";
  
   getExperience(): Observable<Experiences[]> {
    return this.http.get<Experiences[]>(this.apiExperienceUrl + "/traer/experiencia");
  }

  addExperience(newExperience: Experiences): Observable<Experiences>{
    return this.http.post<Experiences>(this.apiExperienceUrl + "/agregar/experiencia", newExperience, httpOptions).pipe(map(
      response => response as Experiences
    ))
  }

  editExperience(experience: Experiences) : Observable<Experiences> {
    const url = `${this.apiExperienceUrl}/editar/experiencia/${experience.id}`;
    return this.http.put<Experiences>(url,experience,httpOptions).pipe(map(
      response => response as Experiences
    ))
  }
  
  deleteExperience(experience: Experiences ): Observable<Experiences> {
    const url = `${this.apiExperienceUrl}/borrar/experiencia/${experience.id}`
    return this.http.delete<Experiences>(url);
  }
}
