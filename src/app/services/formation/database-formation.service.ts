import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Formation } from '../../interfaces/interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseFormationService {

  private apiPrueba = "http://localhost:3000";
  private apiFormation = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  getFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.apiFormation + "/traer/formacion");
  }

  addFormation(newFormation: Formation): Observable<Formation>{
    return this.http.post<Formation>(this.apiFormation + "/agregar/formacion", newFormation, httpOptions).pipe(map(
      response => response as Formation
    ))
  }

  editFormation(formation: Formation) : Observable<Formation> {
    const url = `${this.apiFormation}/editar/formacion/${formation.id}`;
    return this.http.put<Formation>(url,formation,httpOptions).pipe(map(
      response => response as Formation
    ))
  }
  
  deleteFormation(formation: Formation ): Observable<Formation> {
    const url = `${this.apiFormation}/borrar/formacion/${formation.id}`
    return this.http.delete<Formation>(url);
  }
}
