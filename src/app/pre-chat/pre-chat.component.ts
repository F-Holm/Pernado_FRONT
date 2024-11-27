import {Component, Input} from '@angular/core';
import {IChat} from "../../models/Chat";

@Component({
  selector: 'app-pre-chat',
  standalone: true,
  imports: [],
  templateUrl: './pre-chat.component.html',
  styleUrl: './pre-chat.component.css'
})
export class PreChatComponent {
  @Input() contacto!: string;
  @Input() chat!: IChat;
}
