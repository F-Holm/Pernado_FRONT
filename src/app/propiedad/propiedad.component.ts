import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import Propiedad, { IPropiedad } from '../../models/Propiedad';
import { PropiedadApiService } from '../services/propiedad-api.service';
import { CommonModule } from '@angular/common';
import { MapaComponent } from '../mapa/mapa.component';
import Direccion, { IDireccion } from '../../models/Direccion';
import { AuthService } from '../services/auth-api.service';
import { IUsuario } from '../../models/Usuario';

@Component({
  selector: 'app-propiedad',
  standalone: true,
  imports: [RouterModule,CommonModule,MapaComponent],
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})
export class PropiedadComponent implements OnInit {
  idpropiedad!: number;
  propiedad!: IPropiedad 
  duebio!:IUsuario;
  imagenActual: number = 0;  // Inicializa en 0 (primera imagen)

  constructor(private servicio: PropiedadApiService, private route: ActivatedRoute,private auth:AuthService) {}

  ngOnInit() {
    this.cargar();
  }

  cargar(): void {
    this.idpropiedad = parseInt(this.route.snapshot.params['id'], 10);
    this.servicio.getPropiedad(this.idpropiedad).subscribe((data: any) => {
      this.propiedad = data.propiedad as IPropiedad;
      console.log(this.propiedad);
      if (!this.propiedad.imagenes || this.propiedad.imagenes.length === 0) {
        this.imagenActual = -1;
      }
      
    });
  }
  dirCompleta(direccion: IDireccion): string {
    return Direccion.dirCompleta(direccion);
  }
  siguienteImagen() {
    if (this.propiedad.imagenes && this.imagenActual < this.propiedad.imagenes.length - 1) {
      this.imagenActual++;
    } else {
      this.imagenActual = 0;  // Vuelve a la primera imagen
    }
  }
  getImagen(index: number): string {
    return 'http://localhost:3000/api/img/' +this.propiedad.imagenes[index];
  }
  anteriorImagen() {
    if (this.propiedad.imagenes && this.imagenActual > 0) {
      this.imagenActual--;
    } else {
      this.imagenActual = this.propiedad.imagenes.length - 1;  // Vuelve a la última imagen
    }
  }
  contactar() {
    if(this.auth.loggedIn()){
    
    
    }else{
      alert('Debe iniciar sesion para contactar con el propietario');
    }
  }
}
