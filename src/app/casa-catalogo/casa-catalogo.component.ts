import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IPropiedad } from '../../models/Propiedad';
import { PropiedadApiService } from '../services/propiedad-api.service';

@Component({
  selector: 'app-casa-catalogo',
  standalone: true,
  imports: [ CommonModule,
    RouterModule],
  templateUrl: './casa-catalogo.component.html',
  styleUrl: './casa-catalogo.component.css'
})
export class CasaCatalogoComponent {
  idpropiedad:number;
  propiedad!:IPropiedad;
  imagenActual!: number; 
  constructor(private servicio: PropiedadApiService,
    private route: ActivatedRoute) { 
    this.idpropiedad = parseInt(this.route.snapshot.params['id'], 10);
    this.servicio.getPropiedad(this.idpropiedad).subscribe((data:any) => {
      this.propiedad = data.propiedad;
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
