import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Usuario, { IUsuario } from '../../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {

  constructor(private http: HttpClient){}
  private BASE_URL = "http://localhost:3000/api/usuario";

  getUsuarios(): any {
    return (this.http.get<any>(this.BASE_URL));
  }

  getUsuario(id: number): any {
    return (this.http.get<any>(this.BASE_URL + "/" + id));
  }

  getNombreUsuario(id: number): any {
    return (this.http.get<any>(this.BASE_URL + '/nombreUsuario/' + id));
  }

  getUsuarioToken(): any {
    return (this.http.get<any>(this.BASE_URL + '/token'));
  }

  postUsuario(usuario: IUsuario): any {
    return (this.http.post<any>(this.BASE_URL, {"usuario" : usuario}));
  }

  putUsuario(usuario: IUsuario): any {
    console.log("hola");
    return (this.http.put<any>(this.BASE_URL, { "usuario" : usuario }));
  }

  deleteUsuario(id: number): any {
    return (this.http.delete<any>(this.BASE_URL + "/" + id));
  }
}
