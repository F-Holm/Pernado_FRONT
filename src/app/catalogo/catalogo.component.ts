import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPropiedad } from '../../models/Propiedad';
import { PropiedadApiService } from '../services/propiedad-api.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  propiedades: IPropiedad[] = [];
  constructor( private servicio: PropiedadApiService ) {}
  ngOnInit(){
    this.servicio.getPropiedades().subscribe( (p: { propiedades: IPropiedad[]; }) => this.propiedades = p.propiedades);
  }
}
