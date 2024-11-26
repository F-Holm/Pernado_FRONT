import {Component, OnInit} from '@angular/core';
import {IPropiedad} from "../../models/Propiedad";
import {PropiedadApiService} from "../services/propiedad-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modificar-propiedad',
  standalone: true,
  imports: [],
  templateUrl: './modificar-propiedad.component.html',
  styleUrl: './modificar-propiedad.component.css'
})
export class ModificarPropiedadComponent implements OnInit {
  propiedad!: IPropiedad;
  idPropiedad: number = this.route.snapshot.params['id'];

  constructor(private  propiedadService: PropiedadApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.cargarPropiedad();
  }


  cargarPropiedad(): void {
    this.propiedadService.getPropiedad(this.idPropiedad).subscribe((data: any) => {
      this.propiedad = data.propiedad;
    });
  }
}
