import { Component, OnInit } from '@angular/core';
import {UsuarioApiService} from "../services/usuario-api.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {IUsuario} from "../../models/Usuario";
import {Provincias} from "../../models/Lugares/Provincias";
import {MunicipiosBuenosAires} from "../../models/Lugares/Buenos Aires";
import {BarriosCABA} from "../../models/Lugares/CABA";
import {MunicipiosCatamarca} from "../../models/Lugares/Catamarca";
import {MunicipiosChaco} from "../../models/Lugares/Chaco";
import {MunicipiosChubut} from "../../models/Lugares/Chubut";
import {MunicipiosCordoba} from "../../models/Lugares/Cordoba";
import {MunicipiosCorrientes} from "../../models/Lugares/Corrientes";
import {MunicipiosEntreRios} from "../../models/Lugares/Entre Rios";
import {MunicipiosFormosa} from "../../models/Lugares/Formosa";
import {MunicipiosJujuy} from "../../models/Lugares/Jujuy";
import {MunicipiosLaPampa} from "../../models/Lugares/La Pampa";
import {MunicipiosLaRioja} from "../../models/Lugares/La Rioja";
import {MunicipiosMendoza} from "../../models/Lugares/Mendoza";
import {MunicipiosMisiones} from "../../models/Lugares/Misiones";
import {MunicipiosNeuquen} from "../../models/Lugares/Neuquen";
import {MunicipiosRioNegro} from "../../models/Lugares/Rio Negro";
import {MunicipiosSalta} from "../../models/Lugares/Salta";
import {MunicipiosSanJuan} from "../../models/Lugares/San Juan";
import {MunicipiosSanLuis} from "../../models/Lugares/San Luis";
import {MunicipiosSantaCruz} from "../../models/Lugares/Santa Cruz";
import {MunicipiosSantaFe} from "../../models/Lugares/Santa Fe";
import {MunicipiosSantiagoDelEstero} from "../../models/Lugares/Santiago del Estero";
import {MunicipiosTierraDelFuego} from "../../models/Lugares/Tierra del Fuego";
import {MunicipiosTucuman} from "../../models/Lugares/Tucuman";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDireccion } from '../../models/Direccion';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-modificar-cuenta',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,
    RouterModule,HttpClientModule],
  templateUrl: './modificar-cuenta.component.html',
  styleUrl: './modificar-cuenta.component.css'
})
export class ModificarCuentaComponent implements OnInit {
  idUsuario: number = this.route.snapshot.params['id'];
  usuario!: IUsuario;
  provincias: any[] = Object.values(Provincias);
  municipios: any[] = [];
  registerForm!: FormGroup;

  actualizarMunicipios(provincia: string): void {
    switch (provincia) {
      case Provincias.BUENOS_AIRES:
        this.municipios = Object.values(MunicipiosBuenosAires);
        break;
      case Provincias.CIUDAD_AUTONOMA_DE_BUENOS_AIRES:
        this.municipios = Object.values(BarriosCABA);
        break;
      case Provincias.CATAMARCA:
        this.municipios = Object.values(MunicipiosCatamarca);
        break;
      case Provincias.CHACO:
        this.municipios = Object.values(MunicipiosChaco);
        break;
      case Provincias.CHUBUT:
        this.municipios = Object.values(MunicipiosChubut);
        break;
      case Provincias.CORDOBA:
        this.municipios = Object.values(MunicipiosCordoba);
        break;
      case Provincias.CORRIENTES:
        this.municipios = Object.values(MunicipiosCorrientes);
        break;
      case Provincias.ENTRE_RIOS:
        this.municipios = Object.values(MunicipiosEntreRios);
        break;
      case Provincias.FORMOSA:
        this.municipios = Object.values(MunicipiosFormosa);
        break;
      case Provincias.JUJUY:
        this.municipios = Object.values(MunicipiosJujuy);
        break;
      case Provincias.LA_PAMPA:
        this.municipios = Object.values(MunicipiosLaPampa);
        break;
      case Provincias.LA_RIOJA:
        this.municipios = Object.values(MunicipiosLaRioja);
        break;
      case Provincias.MENDOZA:
        this.municipios = Object.values(MunicipiosMendoza);
        break;
      case Provincias.MISIONES:
        this.municipios = Object.values(MunicipiosMisiones);
        break;
      case Provincias.NEUQUEN:
        this.municipios = Object.values(MunicipiosNeuquen);
        break;
      case Provincias.RIO_NEGRO:
        this.municipios = Object.values(MunicipiosRioNegro);
        break;
      case Provincias.SALTA:
        this.municipios = Object.values(MunicipiosSalta);
        break;
      case Provincias.SAN_JUAN:
        this.municipios = Object.values(MunicipiosSanJuan);
        break;
      case Provincias.SAN_LUIS:
        this.municipios = Object.values(MunicipiosSanLuis);
        break;
      case Provincias.SANTA_CRUZ:
        this.municipios = Object.values(MunicipiosSantaCruz);
        break;
      case Provincias.SANTA_FE:
        this.municipios = Object.values(MunicipiosSantaFe);
        break;
      case Provincias.SANTIAGO_DEL_ESTERO:
        this.municipios = Object.values(MunicipiosSantiagoDelEstero);
        break;
      case Provincias.TIERRA_DEL_FUEGO:
        this.municipios = Object.values(MunicipiosTierraDelFuego);
        break;
      case Provincias.TUCUMAN:
        this.municipios = Object.values(MunicipiosTucuman
        );
        break;
    }
  }

  constructor (private usuarioService: UsuarioApiService, private route: ActivatedRoute,private fb: FormBuilder,private router: Router) {
    
    
  }

  agregarUsuario() {
    if (this.registerForm.valid) {
      const {
        email,
        nombre,
        apellido,
        dni,
        telefono,
        nombreUsuario,
        fechaNacimiento,
        provincia,
        municipio,
        direccion,
        piso_departamento,
        codigoPostal
      } = this.registerForm.value;


      const dir: IDireccion = {
        provincia,
        municipio,
        direccion,
        piso_departamento,
        codigoPostal
      };

      const fechaNacimientoDate = new Date(fechaNacimiento);

      const usuario: IUsuario = {
        id: -1,
        dni,
        email,
        telefono,
        nombre,
        apellido,
        nombreUsuario,
        contrasenia:this.usuario.contrasenia,
        fechaNacimiento: fechaNacimientoDate,
        direccion: dir,
        admin: false,
      };

      this.usuarioService.putUsuario(usuario).subscribe(
        (response: any) => {
          this.router.navigateByUrl('/mi-cuenta');
          console.log('Usuario actualizado con éxito');
        },
        (error: any) => {
          console.error('Error al actualizar usuario', error);
        }
      );
    } else {
      console.log('Formulario inválido');
      this.registerForm.markAllAsTouched();
    }
  }

  ngOnInit(){
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.usuarioService.getUsuario(this.idUsuario).subscribe((data: any) => {
      this.usuario = data.usuario;
  
      // Una vez que tienes los datos del usuario, inicializas el formulario
      this.registerForm = this.fb.group({
        email: [this.usuario?.email || '', [Validators.required, Validators.email]],
        nombre: [this.usuario?.nombre || '', Validators.required],
        apellido: [this.usuario?.apellido || '', Validators.required],
        dni: [this.usuario?.dni || '', Validators.required],
        telefono: [this.usuario?.telefono || '', Validators.required],
        nombreUsuario: [this.usuario?.nombreUsuario || '', Validators.required],
        fechaNacimiento: [this.usuario?.fechaNacimiento || '', Validators.required],
        provincia: [this.usuario?.direccion?.provincia || '', Validators.required],
        municipio: [this.usuario?.direccion?.municipio || '', Validators.required],
        direccion: [this.usuario?.direccion?.direccion || '', Validators.required],
        piso_departamento: [this.usuario?.direccion?.piso_departamento || ''],
        codigoPostal: [this.usuario?.direccion?.codigoPostal || '', Validators.required],
      });
  
      // Actualizamos los municipios basados en la provincia seleccionada
      if (this.usuario?.direccion?.provincia) {
        this.actualizarMunicipios(this.usuario.direccion.provincia);
      }
    });
  }
  
}
