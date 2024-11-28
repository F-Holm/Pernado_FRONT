import {Component, Input, OnInit} from '@angular/core';
import {IChat} from "../../models/Chat";
import {UsuarioApiService} from "../services/usuario-api.service";

@Component({
  selector: 'app-pre-chat',
  standalone: true,
  imports: [],
  templateUrl: './pre-chat.component.html',
  styleUrl: './pre-chat.component.css'
})
export class PreChatComponent implements OnInit {
  @Input() chat!: IChat;
  @Input() usuario!: number;
  contacto!: string;
  ultimoMsg!: string;

  constructor(private usuarioService: UsuarioApiService) {}

  ngOnInit() {
    this.cargarNombreContacto();
  }

  setUltimoMsg(): void {
    const ult: number = this.chat.mensajes.length -1;
    if (ult >= 0) this.ultimoMsg = this.getNombre(ult) + ': ' + this.chat.mensajes[ult].contenido;
    else this.ultimoMsg = this.contacto;
  }

  cargarNombreContacto(): void {
    if (this.usuario == this.chat.comprador) {
      this.usuarioService.getNombreUsuario(this.chat.vendedor).subscribe((data: any) => {
        this.contacto = data.nombreUsuario;
        this.setUltimoMsg();
      })
    } else {
      this.usuarioService.getNombreUsuario(this.chat.comprador).subscribe((data: any) => {
        this.contacto = data.nombreUsuario;
        this.setUltimoMsg();
      })
    }
  }

  getNombre(index: number): string {
    if (this.usuario == this.chat.comprador && this.chat.mensajes[index].cliente || this.usuario != this.chat.comprador && !this.chat.mensajes[index].cliente) {
      return 'Vos';
    }
    return this.contacto;
  }
}
