import {Component, Input} from '@angular/core';
import {IChat} from "../../models/Chat";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  @Input() contacto!: string;
  @Input() chat!: IChat;


}
