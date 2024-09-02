import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/usuario.model';
  @Injectable({
    providedIn: 'root'
  })
export class UsuarioService {
  private baseUrl = "http://localhost:3000/api/usuario";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  obtenerTodosLosUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.baseUrl);
  }

  obtenerUsuarioPorId(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.baseUrl}/${id}`);
  }
  agregarUsuario(usuario: IUsuario): Observable<any> {
    return this.http.post(this.baseUrl,{"usuario": usuario}, this.httpOptions);
  }
  cancelarLibros(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  modificarUsuario(id: number, usuario: IUsuario): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, usuario, this.httpOptions);
  }
}
