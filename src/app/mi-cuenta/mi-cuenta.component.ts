
import { Component, OnInit } from '@angular/core';
import Usuario, {IUsuario} from "../../models/Usuario";
import Propiedad, {IPropiedad} from "../../models/Propiedad";
import {UsuarioApiService} from "../services/usuario-api.service";
import {PropiedadApiService} from "../services/propiedad-api.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth-api.service';


@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [ CommonModule,RouterModule ],
  templateUrl: './mi-cuenta.component.html',
  styleUrl: './mi-cuenta.component.css'
})
export class MiCuentaComponent implements OnInit {
  usuario!: IUsuario;
  propiedades!: IPropiedad[];
  

  constructor(private usuarioService: UsuarioApiService, private  propiedadService: PropiedadApiService, private router: Router,private authService: AuthService) {}

  ngOnInit() {
    this.cargarUsuario();
    this.cargarPropiedades();
  }

  cargarUsuario(): void {
    
    this.usuarioService.getUsuarioToken().subscribe((data: any) => {
      this.usuario = data.usuario;
    });
  }
  getImagen(propiedad: IPropiedad){
    return  Propiedad.getImg(propiedad, 0);
  }
  cargarPropiedades(): void {
    this.propiedadService.getPropiedadesUsuarios(this.usuario.id).subscribe((data: any) => {
      this.propiedades = data.propiedades;
      console.log(this.propiedades);
    });
  }

  borrarCuenta(): void {
    let respuesta: string | null = '';
  
    // Bucle que fuerza al usuario a escribir la contraseña
    const confirmarBorrado = confirm('¿Estás seguro de que deseas borrar tu cuenta?');

    if (confirmarBorrado) {
      // Si el usuario acepta, proceder a borrar la cuenta
      alert('¡Gracias! Ahora podemos proceder con la eliminación.');
  
      // Eliminar usuario y hacer logout
      this.usuarioService.deleteUsuario(this.usuario.id).subscribe((data: any) => {
        console.log(data);
        this.authService.logout();
  
        // Redirigir al usuario después de borrar los datos
        this.router.navigate(['/']); // Navegar al inicio
      });
    } else {
      // Si el usuario cancela, le mostramos un mensaje y no hacemos nada
      alert('Eliminación cancelada. No se ha borrado tu cuenta.');
    }
  
  }
  
}
