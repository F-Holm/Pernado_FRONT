import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { IPropiedad } from '../../models/Propiedad';
import {IFiltrosPropiedad} from "../../models/FiltrosPropiedad";

@Injectable({
  providedIn: 'root'
})
export class PropiedadApiService {

  constructor(private http: HttpClient){}
  private BASE_URL = "http://localhost:3000/api/propiedad";

  getPropiedades(): any {
    return (this.http.get<any>(this.BASE_URL));
  }

  getCantPropiedades(): any {
    return (this.http.get<any>(this.BASE_URL + "/cant"));
  }

  getPropiedadesUsuarios(idUsuario: number): any {
    return (this.http.get<any>(this.BASE_URL + "/usuario/" + idUsuario));
  }

  getPropiedadesFiltros(query: any): any {
    return (this.http.post<any>(this.BASE_URL + '/filtered', { 'query' : query }));
  }

  getPropiedadesLimitSkip(limit: number, skip: number): any {
    return (this.http.get<any>(this.BASE_URL + '/ls/' + limit + '/' + skip));
  }

  getPropiedadesFiltrosLimitSkip(query: any, limit: number, skip: number): any {
    return (this.http.post<any>(this.BASE_URL + '/filteredls', { "query": query, "limit": limit, "skip": skip }));
  }

  getPropiedad(id: number): any {
    return (this.http.get<any>(this.BASE_URL + '/' + id));
  }

  postPropiedad(propiedad: IPropiedad): any {
    return (this.http.post<any>(this.BASE_URL, { "propiedad": propiedad }));
  }

  postImg(formData: FormData): any {
    return (this.http.post<any>(this.BASE_URL + '/img', formData));
  }

  putPropiedad(propiedad: IPropiedad): any {
    return (this.http.put<any>(this.BASE_URL, { "propiedad" : propiedad }));
  }

  deletePropiedad(id: number): any {
    return (this.http.delete<any>(this.BASE_URL + "/" + id));
  }
}
