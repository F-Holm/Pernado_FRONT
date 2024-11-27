import { Component, OnInit } from '@angular/core';
import {IChat} from "../../models/Chat";
import {ChatApiService} from "../services/chat-api.service";
import {UsuarioApiService} from "../services/usuario-api.service";
import {IUsuario} from "../../models/Usuario";
import {PreChatComponent} from "../pre-chat/pre-chat.component";
import {ChatComponent} from "../chat/chat.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [
    PreChatComponent,
    ChatComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent implements OnInit {
  chats!: IChat[];
  chatActual: number = 0;
  usuario!: number;
  tieneChats: boolean = false;

  constructor(private apiChats: ChatApiService, private apiUsuario: UsuarioApiService) {}

  ngOnInit(): void {
    this.cargarChats();
    this.getId();
  }

  cargarChats(): void {
    this.apiChats.getMyChatsToken().subscribe((data: any) => {
      this.chats = data.chats;
      this.tieneChats = this.chats.length > 0;
    })
  }

  getId(): void {
    this.apiUsuario.getUsuarioToken().subscribe((data: any) => {
      this.usuario = (data.usuario as IUsuario).id;
    })
  }

  selectChat(i: number): void {
    this.chatActual = i;
  }
}
