import { Component, OnInit } from '@angular/core';
import Usuario, {IUsuario} from "../../models/Usuario";
import {IPropiedad} from "../../models/Propiedad";
import {UsuarioApiService} from "../services/usuario-api.service";
import {PropiedadApiService} from "../services/propiedad-api.service";
import {ActivatedRoute} from "@angular/router";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './mi-cuenta.component.html',
  styleUrl: './mi-cuenta.component.css'
})
export class MiCuentaComponent implements OnInit {
  usuario!: IUsuario;
  propiedades!: IPropiedad[];

  constructor(private usuarioService: UsuarioApiService, private  propiedadService: PropiedadApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.usuarioService.getUsuarioToken().subscribe((data: any) => {
      this.usuario = data.usuario;
      this.cargarPropiedades();
    });
  }

  cargarPropiedades(): void {
    this.propiedadService.getPropiedadesUsuarios(this.usuario.id).subscribe((data: any) => {
      this.propiedades = data.propiedades;
    });
  }

}
