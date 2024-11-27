import { Component, OnInit } from '@angular/core';
import {IChat} from "../../models/Chat";
import {ChatApiService} from "../services/chat-api.service";

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent implements OnInit {
  chats!: IChat[];

  constructor(private apiChats: ChatApiService) {}

  ngOnInit(): void {
    this.cargarChats();
  }

  cargarChats(): void {
    this.apiChats.getMyChatsToken().subscribe((data: any) => {
      this.chats = data.chats;
    })
  }
}
