import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Credentials } from '../interfaces/experiences';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = "http://localhost:8080/login";

  constructor(private http: HttpClient) { 

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

      return body;
    }))
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

}
