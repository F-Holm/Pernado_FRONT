import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import Propiedad, { IPropiedad } from '../../models/Propiedad';
import { PropiedadApiService } from '../services/propiedad-api.service';

@Component({
  selector: 'app-propiedad',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './propiedad.component.html',
  styleUrl: './propiedad.component.css'
})
export class PropiedadComponent implements OnInit {
  idpropiedad!: number;
  propiedad: IPropiedad = Propiedad.new();
  imagenActual!: number;
  constructor(private servicio: PropiedadApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.cargar();
  }

  public cargar(): void {
    this.idpropiedad = parseInt(this.route.snapshot.params['id'], 10);
    this.servicio.getPropiedad(this.idpropiedad).subscribe((data:any) => {
      this.propiedad = data.propiedad as IPropiedad;
      if (this.propiedad.imagenes == null || this.propiedad.imagenes.length == 0){
        this.imagenActual = -1;
      } else {
        this.imagenActual = 0;
      }
    });
  }

  siguienteImagen() {
    if (this.imagenActual < this.propiedad.imagenes.length - 1) {
      this.imagenActual++;
    } else {
      this.imagenActual = 0;
    }
  }

  anteriorImagen() {
    if (this.imagenActual > 0) {
      this.imagenActual--;
    } else {
      this.imagenActual = this.propiedad.imagenes.length - 1;
    }
  }
}
