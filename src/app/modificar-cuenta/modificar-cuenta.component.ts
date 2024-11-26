import { Component, OnInit } from '@angular/core';
import {UsuarioApiService} from "../services/usuario-api.service";
import {ActivatedRoute} from "@angular/router";
import {IUsuario} from "../../models/Usuario";

@Component({
  selector: 'app-modificar-cuenta',
  standalone: true,
  imports: [],
  templateUrl: './modificar-cuenta.component.html',
  styleUrl: './modificar-cuenta.component.css'
})
export class ModificarCuentaComponent implements OnInit {
  idUsuario: number = this.route.snapshot.params['id'];
  usuario!: IUsuario;

  constructor (private usuarioService: UsuarioApiService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.usuarioService.getUsuario(this.idUsuario).subscribe((data: any) => {
      this.usuario = data.usuario;
    });
  }
}
