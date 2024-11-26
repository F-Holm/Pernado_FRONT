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
  idUsuario: number = this.route.snapshot.params['id'];

  constructor(private usuarioService: UsuarioApiService, private  propiedadService: PropiedadApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.cargarUsuario();
    this.cargarPropiedades();
  }

  cargarUsuario(): void {
    this.usuarioService.getUsuario(this.idUsuario).subscribe((data: any) => {
      this.usuario = data.usuario;
    });
  }

  cargarPropiedades(): void {
    this.propiedadService.getPropiedadesUsuarios(this.idUsuario).subscribe((data: any) => {
      this.propiedades = data.propiedades;
    });
  }

}
