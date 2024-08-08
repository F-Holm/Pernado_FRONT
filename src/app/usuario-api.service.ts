import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IUsuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {

  constructor(private http: HttpClient){}
  private BASE_URL = "http://localhost:3000/api/propiedad";

  toJSONString(usuario: IUsuario): string {
    return "{ usuario: " + JSON.stringify(usuario) + "}";
  }

  getChats(): any {
    return (this.http.get<any>(this.BASE_URL));
  }
  
  getChat(id: number): any {
    return (this.http.get<any>(this.BASE_URL + "/" + id));
  }
  
  postChats(usuario: IUsuario): any {
    return (this.http.post<any>(this.BASE_URL, this.toJSONString(usuario)));
  }

  putChats(usuario: IUsuario): any {
    return (this.http.put<any>(this.BASE_URL, this.toJSONString(usuario)));
  }

  deleteChats(id: number): any {
    return (this.http.delete<any>(this.BASE_URL + "/" + id));
  }
}
