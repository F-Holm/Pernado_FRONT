import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-api.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var token;

    if (typeof window !== 'undefined' && window.localStorage) {
      token = localStorage.getItem('token');
      // Otras operaciones que dependan de localStorage
    } else {
      console.log("dfuhjfodijfs");
      return next.handle(req);
    }
    console.log(token);

    let duplicate = req;

    if (token) {
      duplicate = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(duplicate);
  }
}