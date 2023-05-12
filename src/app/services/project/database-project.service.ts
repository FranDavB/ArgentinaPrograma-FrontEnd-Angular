import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Project } from '../../interfaces/interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseProjectService {

  private apiPrueba = "http://localhost:3000";
  private apiProject = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiProject + "/traer/proyecto");
  }

  addProject(newProject: Project): Observable<Project>{
    return this.http.post<Project>(this.apiProject + "/agregar/proyecto", newProject, httpOptions).pipe(map(
      response => response as Project
    ))
  }

  editProject(Project: Project) : Observable<Project> {
    const url = `${this.apiProject}/editar/proyecto/${Project.id}`;
    return this.http.put<Project>(url,Project,httpOptions).pipe(map(
      response => response as Project
    ))
  }
  
  deleteProject(Project: Project ): Observable<Project> {
    const url = `${this.apiProject}/borrar/proyecto/${Project.id}`
    return this.http.delete<Project>(url);
  }
}