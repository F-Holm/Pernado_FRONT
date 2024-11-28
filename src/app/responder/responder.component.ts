import {Component, OnInit} from '@angular/core';
import {IPropiedad} from "../../models/Propiedad";
import {IPregunta} from "../../models/Pregunta";
import {NgForOf} from "@angular/common";
import {ResponderPropiedadComponent} from "../responder-propiedad/responder-propiedad.component";
import {PropiedadApiService} from "../services/propiedad-api.service";

@Component({
  selector: 'app-responder',
  standalone: true,
  imports: [
    NgForOf,
    ResponderPropiedadComponent
  ],
  templateUrl: './responder.component.html',
  styleUrl: './responder.component.css'
})
export class ResponderComponent implements OnInit {
  propiedades!: IPropiedad[];

  constructor (private propiedadService: PropiedadApiService) {}

  ngOnInit() {
    this.cargarPropiedades();
  }

  cargarPropiedades(): void {
    this.propiedadService.getPropiedadesUsuariosToken().subscribe((data: any) => {
      this.propiedades = data.propiedades;
    });
  }
}
