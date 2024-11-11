import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Usuario, { IUsuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {

  constructor(private http: HttpClient){}
  private BASE_URL = "http://localhost:3000/api/usuario";

  toJSONString(usuario: IUsuario): string {
    return "{ usuario: " + JSON.stringify(usuario) + "}";
  }

  getUsuarios(): any {
    return (this.http.get<any>(this.BASE_URL));
  }
  
  getUsuario(id: number): any {
    return (this.http.get<any>(this.BASE_URL + "/" + id));
  }
  
  postUsuarios(usuario: IUsuario): any {
    const body =  this.toJSONString(usuario); 
    console.log(body);
    console.log(Usuario.isUsuario({"usuario": usuario}));
    return this.http.post<any>(this.BASE_URL,{"usuario": usuario} );
  }
  
  putusuarios(usuario: IUsuario): any {
    return (this.http.put<any>(this.BASE_URL, this.toJSONString(usuario)));
  }

  deleteChats(id: number): any {
    return (this.http.delete<any>(this.BASE_URL + "/" + id));
  }
}
