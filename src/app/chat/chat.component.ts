import {Component, Input, OnInit} from '@angular/core';
import {IChat} from "../../models/Chat";
import {ChatApiService} from "../services/chat-api.service";
import {UsuarioApiService} from "../services/usuario-api.service";
import {NgForOf} from "@angular/common";
import Mensaje, {IMensaje} from "../../models/Mensaje";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  _msg: string = '';
  @Input() chat!: IChat;
  @Input() usuario!: number;
  contacto!: string;

  constructor(private usuarioService: UsuarioApiService, private chatService: ChatApiService) {}

  ngOnInit() {
    if (this.usuario == this.chat.comprador) {
      this.usuarioService.getNombreUsuario(this.chat.vendedor).subscribe((data: any) => {
        this.contacto = data.nombreUsuario;
      })
    } else {
      this.usuarioService.getNombreUsuario(this.chat.comprador).subscribe((data: any) => {
        this.contacto = data.nombreUsuario;
      })
    }
  }

  getNombre(index: number): string {
    if (this.usuario == this.chat.comprador && this.chat.mensajes[index].cliente || this.usuario != this.chat.comprador && !this.chat.mensajes[index].cliente) {
      return 'Vos';
    }
    return this.contacto;
  }

  enviarMensaje(): void {
    if (this._msg.length == 0) return;
    const cliente: boolean = this.usuario == this.chat.comprador;
    const mensaje: IMensaje = Mensaje.new(this._msg, new Date, cliente);
    this.chatService.postMensaje(this.chat.id, mensaje).subscribe((data: any) => {
      location.reload();
    })
  }

}
