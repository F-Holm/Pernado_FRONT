import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoPropiedad } from '../../models/TipoPropiedad';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PropiedadApiService } from '../services/propiedad-api.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import {IPropiedad} from "../../models/Propiedad";
import { Provincias } from '../../models/Lugares/Provincias';
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
import { IDireccion } from '../../models/Direccion';

@Component({
  selector: 'app-agregar-propiedad',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule,HttpClientModule],
  templateUrl: './agregar-propiedad.component.html',
  styleUrls: ['./agregar-propiedad.component.css']
})
export class AgregarPropiedadComponent  {
  propiedadForm!: FormGroup;
  tiposPropiedad: TipoPropiedad[] = Object.values(TipoPropiedad);
  selectedImages: File[] = [];
  provincias: any[] = Object.values(Provincias);
  municipios: any[] = [];
 
  constructor(
    private fb: FormBuilder,
    private propiedadService: PropiedadApiService,
    private router: Router
  ) {
    this.propiedadForm = this.fb.group({
      tipoPropiedad: [TipoPropiedad.CASA, Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      duenio: [''],
      precio: ['', Validators.required],
      alquiler: [false],
      expensas: [0, Validators.required],
      imagenes: [[]],
      ubicacion: this.fb.group({
        provincia: ['', Validators.required],
        municipio: ['', Validators.required],
        direccion: ['', Validators.required],
        piso_departamento: [''],
        codigoPostal: [0, Validators.required]
      }),
      caracteristicas: this.fb.group({
        cantidadAmbientes: [0, Validators.required],
        m2Totales: [0, Validators.required],
        m2Cubiertos: [0, Validators.required],
        cantidadBanios: [0, Validators.required],
        cantidadDormitorios: [0, Validators.required],
        cantidadToilettes: [0, Validators.required],
        anioConstruccionRemodelacion: [0, Validators.required],
        cantidadPlantas: [0, Validators.required],
        cantidadGarages: [0, Validators.required],
        cantidadElevadores: [0, Validators.required],
        parrilla: [false],
        pileta: [false],
        balcon: [false],
        patio: [false],
        gimnasio: [false],
        seguridad: [false]
      })
    
    });
  }

 

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
 
  onImageSelected(event: any) {
    const files = event.target.files;
    this.selectedImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.selectedImages.push(file);
    }
  }

  nombreImagenes(): string[]{
    let nombres: string[] = [];
    for (const img of this.selectedImages) {
      const uniqueSuffix: string = Date.now() + '-' + Math.round(Math.random() * 1E9);
      nombres.push(uniqueSuffix + img.name);
    }
    return nombres;
  }

  onSubmit() {
    const propiedadData = {
      ...this.propiedadForm.value,
      id: -1,
      duenio: null,
      preguntas: [],
    };
    
   

    propiedadData.imagenes = this.nombreImagenes();

    const formData: FormData = new FormData();

    this.selectedImages.forEach((imagen: File, index: number): void => {
      formData.append('img', imagen, propiedadData.imagenes[index]);
    });

    console.log(formData.get('img'))

    if (this.propiedadForm.valid) {
      this.propiedadService.postPropiedad(propiedadData as IPropiedad).subscribe(() => {
        console.log('Propiedad agregada con éxito');
        this.propiedadService.postImg(formData).subscribe(() => {
          this.router.navigateByUrl('/');
        }, (error: any) => {
          console.log('ERROR AL SUBIR IMAGENES, error');
          }
        );
      }, (error: HttpErrorResponse) => {
          console.error('Error al agregar propiedad', error);
        });
    } else {
      console.log('Formulario inválido');
      this.propiedadForm.markAllAsTouched();
    }
  }

}
