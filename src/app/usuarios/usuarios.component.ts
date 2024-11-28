import {Component, OnInit} from '@angular/core';
import {IUsuario} from "../../models/Usuario";
import {UsuarioApiService} from "../services/usuario-api.service";
import {NgForOf} from "@angular/common";
import {UsuarioComponent} from "../usuario/usuario.component";

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    NgForOf,
    UsuarioComponent
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  usuarios!: IUsuario[];

  constructor(private usuarioService: UsuarioApiService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((data: any) => {
      this.usuarios = data.usuarios;
    });
  }
}
