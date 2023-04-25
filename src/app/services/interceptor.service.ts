import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authenticate: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    const token = this.authenticate.getToken();


    if(token){
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      })
    }

    return next.handle(req);
  }
  
}
