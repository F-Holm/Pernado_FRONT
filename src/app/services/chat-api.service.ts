import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { IChat } from '../../models/Chat';
import {IMensaje} from "../../models/Mensaje";

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  constructor(private http: HttpClient){}

  private BASE_URL = "http://localhost:3000/api/chat";

  getChats(): any {
    return (this.http.get<any>(this.BASE_URL));
  }

  tengoChat(duenio: number): any {
    return (this.http.get<any>(this.BASE_URL + '/tengo/' + duenio));
  }

  getMyChats(idMiembro: number): any {
    return (this.http.get<any>(this.BASE_URL + '/mychats/' + idMiembro));
  }

  getMyChatsToken(): any {
    return (this.http.get<any>(this.BASE_URL + '/mychats/'));
  }

  postMensaje(id: number, mensaje: IMensaje): any {
    return (this.http.post<any>(this.BASE_URL + '/mensaje', { 'id': id, 'mensaje' : mensaje }));
  }

  getChat(id: number): any {
    return (this.http.get<any>(this.BASE_URL + "/" + id));
  }

  postChat(chat: IChat): any {
    return (this.http.post<any>(this.BASE_URL, { "chat" : chat }));
  }

  putChat(chat: IChat): any {
    return (this.http.put<any>(this.BASE_URL, { "chat" : chat }));
  }

  deleteChat(id: number): any {
    return (this.http.delete<any>(this.BASE_URL + "/" + id));
  }
}
