import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPropiedad } from '../../models/Propiedad';
import { PropiedadApiService } from '../services/propiedad-api.service';
import {AuthService} from "../services/auth-api.service";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  propiedades: IPropiedad[] = [];
  indice: number = 0;
  imagenesMostradasPorPagina: number = 20;
  cant: number = 0;

  defaultImage: string = 'assets/image.png';

  constructor(private propiedadService: PropiedadApiService) {}

  ngOnInit() {
    this.getCant();
    this.obtener();
  }

  getCant(): void {
    this.propiedadService.getCantPropiedades().subscribe((data: any) => {
      this.cant = data.cant;
    })
  }

  obtener(): void {
    this.propiedadService.getPropiedadesLimitSkip(this.imagenesMostradasPorPagina, this.indice).subscribe((data: any) => {
        this.propiedades = data.propiedades;
      },
      (error: any) => {
        console.error('Error al obtener propiedades:', error);
      }
    );
  }

  siguientePagina(): void{
    if (this.cant > this.indice + this.imagenesMostradasPorPagina) this.indice += this.imagenesMostradasPorPagina;
    this.obtener();
  }

  paginaAnterior(): void{
    if (0 != this.indice) this.indice -= this.imagenesMostradasPorPagina;
    this.obtener();
  }

}
