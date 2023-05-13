import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Credentials } from '../interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = "https://proyectoargprogrbackend.onrender.com/login";

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { 
  const token = sessionStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
    }
  }

  login(credentials: Credentials){
    return this.http.post(this.url, credentials, { observe: 'response'})
    .pipe(map((response: HttpResponse<any>) =>
    {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');

      sessionStorage.setItem('token', token);

      this.loggedIn.next(true)
      
      return body;
    }))
  }


  getToken(){
    return sessionStorage.getItem('token');
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.loggedIn.next(false);
    location.reload();
  }


  isLoggedIn(): boolean {
    return (sessionStorage.getItem('token') !== null);
  }

  get isLoggedIn$(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }

}
