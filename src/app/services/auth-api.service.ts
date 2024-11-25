import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    token: string = '';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  };

  private BASE_URL = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient, private router: Router) { }

  getData(){
    const token = localStorage.getItem('token');
    if(token){
      const data = atob(token.split('.')[1]);
      return JSON.parse(data).data;
    } else {
      return null;
    }
  }

  logUser(email: string, contrasenia: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}`, JSON.stringify({email, contrasenia}), this.httpOptions);
  }

  loggedIn(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  logout(){
    localStorage.removeItem('token');
    //this.router.navigate(['/']);
    location.reload();
  }

}
