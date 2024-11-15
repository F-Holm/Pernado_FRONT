import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IChat } from '../models/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  constructor(private http: HttpClient){}
  private BASE_URL = "http://localhost:3000/api/chat";

  toJSONString(chat: IChat): string {
    return "{ chat: " + JSON.stringify(chat) + "}";
  }

  getChats(): any {
    return (this.http.get<any>(this.BASE_URL));
  }
  
  getChat(id: number): any {
    return (this.http.get<any>(this.BASE_URL + "/" + id));
  }
  
  postChat(chat: IChat): any {
    return (this.http.post<any>(this.BASE_URL, this.toJSONString(chat)));
  }

  putChat(chat: IChat): any {
    return (this.http.put<any>(this.BASE_URL, this.toJSONString(chat)));
  }

  deleteChat(id: number): any {
    return (this.http.delete<any>(this.BASE_URL + "/" + id));
  }
}
