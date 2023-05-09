import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { About } from 'src/app/interfaces/interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseAboutService {

  private apiPrueba = "http://localhost:3000";

  constructor(
    private http: HttpClient
  ) { }

  getAbout(): Observable<About[]> {
    return this.http.get<About[]>(this.apiPrueba + "/about");
   }

   editAbout(about: About) : Observable<About> {

    const url = `${this.apiPrueba}/about/${about.id}`;
    return this.http.put<About>(url,about,httpOptions).pipe(map(
      response => response as About
    )

    )
  }  
}
