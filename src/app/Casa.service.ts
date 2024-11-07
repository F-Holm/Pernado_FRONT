import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPropiedad } from '../models/Propiedad.model';

  @Injectable({
    providedIn: 'root'
  })
export class PropiedadService {
  private baseUrl = "http://localhost:3000/api/propiedad";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  obtenerTodosLosPropiedades(): Observable<IPropiedad[]> {
    return this.http.get<IPropiedad[]>(this.baseUrl);
  }

  obtenerPropiedadPorId(id: number): Observable<IPropiedad> {
    return this.http.get<IPropiedad>(`${this.baseUrl}/${id}`);
  }
  agregarPropiedad(usuario: IPropiedad): Observable<any> {
    return this.http.post(this.baseUrl,{"propiedad": usuario}, this.httpOptions);
  }
  cancelarPropiedad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  modificarPropiedad(id: number, usuario: IPropiedad): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, usuario, this.httpOptions);
  }
}
