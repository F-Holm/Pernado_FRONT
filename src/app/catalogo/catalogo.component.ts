import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPropiedad } from '../../models/Propiedad';
import { PropiedadApiService } from '../services/propiedad-api.service';
import {AuthService} from "../services/auth-api.service";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  propiedades: IPropiedad[] = [];
  constructor( private propiedadServide: PropiedadApiService, private authService: AuthService, private propiedadApi: PropiedadApiService ) {}
  ngOnInit(): void{
    this.propiedadServide.getPropiedades().subscribe( (p: { propiedades: IPropiedad[]; }) => this.propiedades = p.propiedades);
  }
}
