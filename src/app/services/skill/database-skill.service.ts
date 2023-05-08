import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Skill } from '../../interfaces/interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseSkillService {

  private apiPrueba = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiPrueba + "/skill");
  }

  addSkill(newSkill: Skill): Observable<Skill>{
    return this.http.post<Skill>(this.apiPrueba + "/skill", newSkill, httpOptions).pipe(map(
      response => response as Skill
    ))
  }

  editSkill(Skill: Skill) : Observable<Skill> {
    const url = `${this.apiPrueba}/skill/${Skill.id}`;
    return this.http.put<Skill>(url,Skill,httpOptions).pipe(map(
      response => response as Skill
    ))
  }
  
  deleteSkill(Skill: Skill ): Observable<Skill> {
    const url = `${this.apiPrueba}/skill/${Skill.id}`
    return this.http.delete<Skill>(url);
  }
}