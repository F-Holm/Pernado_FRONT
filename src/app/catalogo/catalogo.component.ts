import { Component } from '@angular/core';
import { IPropiedad } from '../../models/Propiedad.model';
import { PropiedadApiService } from '../services/propiedad-api.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
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
