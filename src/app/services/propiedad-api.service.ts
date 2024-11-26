import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPropiedad } from '../../models/Propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadApiService {

  constructor(private http: HttpClient){}
  private BASE_URL = "http://localhost:3000/api/propiedad";

  getPropiedades(): any {
    return (this.http.get<any>(this.BASE_URL));
  }

  getPropiedad(id: number): any {
    return (this.http.get<any>(this.BASE_URL + "/" + id));
  }

  postPropiedad(propiedad: IPropiedad): any {
    return (this.http.post<any>(this.BASE_URL, {"propiedad" : propiedad}));
  }

  putPropiedad(propiedad: IPropiedad): any {
    return (this.http.put<any>(this.BASE_URL, { "propiedad" : propiedad }));
  }

  deletePropiedad(id: number): any {
    return (this.http.delete<any>(this.BASE_URL + "/" + id));
  }
}
