import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Propiedad, { IPropiedad } from '../../models/Propiedad';
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
  
  defaultImage: string = 'assets/image.png'; // Ruta a la imagen por defecto

  constructor(private propiedadService: PropiedadApiService) {}

  ngOnInit() {
    this.obtener();
  }
  getImagen(propiedad: IPropiedad){
    return  Propiedad.getImg(propiedad, 0);
  }
  obtener() {
    this.propiedadService.getPropiedades().subscribe(
      (data: PropiedadesResponse) => {  // Usamos la interfaz `PropiedadesResponse`
       
        this.propiedades = Array.isArray(data.propiedades) ? data.propiedades : [];
        
      },
      (error: any) => {
        console.error('Error al obtener propiedades:', error);
      }
    );
  }
  
}
interface PropiedadesResponse {
  propiedades: IPropiedad[];
}