import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPropiedad } from '../models/Propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadApiService {

  constructor(private http: HttpClient){}
  private BASE_URL = "http://localhost:3000/api/propiedad";

  toJSONString(propiedad: IPropiedad): string {
    return "{ propiedad: " + JSON.stringify(propiedad) + "}";
  }

  getChats(): any {
    return (this.http.get<any>(this.BASE_URL));
  }
  
  getChat(id: number): any {
    return (this.http.get<any>(this.BASE_URL + "/" + id));
  }
  
  postChats(propiedad: IPropiedad): any {
    return (this.http.post<any>(this.BASE_URL, this.toJSONString(propiedad)));
  }

  putChats(propiedad: IPropiedad): any {
    return (this.http.put<any>(this.BASE_URL, this.toJSONString(propiedad)));
  }

  deleteChats(id: number): any {
    return (this.http.delete<any>(this.BASE_URL + "/" + id));
  }
}