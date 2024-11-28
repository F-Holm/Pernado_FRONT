import {Component, OnInit} from '@angular/core';
import {IPropiedad} from "../../models/Propiedad";
import {PropiedadApiService} from "../services/propiedad-api.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
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
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TipoPropiedad } from '../../models/TipoPropiedad';
@Component({
  selector: 'app-modificar-propiedad',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,
    RouterModule,HttpClientModule],
  templateUrl: './modificar-propiedad.component.html',
  styleUrl: './modificar-propiedad.component.css'
})
export class ModificarPropiedadComponent implements OnInit {
  propiedad!: IPropiedad;
  idPropiedad: number = this.route.snapshot.params['id'];
  provincias: any[] = Object.values(Provincias);
  municipios: any[] = [];
  propiedadForm!: FormGroup;
  tiposPropiedad: TipoPropiedad[] = Object.values(TipoPropiedad);
  selectedImages: File[] = [];


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

  constructor(private  propiedadService: PropiedadApiService,  private route: ActivatedRoute,private fb: FormBuilder,private router: Router
  ) {
  }
  ngOnInit(): void {
    this.cargarPropiedad();
  }
  onImageSelected(event: any) {
    const files = event.target.files;
    this.selectedImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.selectedImages.push(file);
    }
  }
  eliminarImage(index: number): void {
    this.propiedad.imagenes.splice(index, 1);  // Elimina la imagen del array
  }
  nombreImagenes(): string[]{
    let nombres: string[] = [];
    for (const img of this.selectedImages) {
      const uniqueSuffix: string = Date.now() + '-' + Math.round(Math.random() * 1E9);
      nombres.push(uniqueSuffix + img.name);
    }
    return nombres;
  }
  getImagen(index: number): string {
    return 'http://localhost:3000/api/img/' +this.propiedad.imagenes[index];
  }
  cargarPropiedad(): void {
    this.propiedadService.getPropiedad(this.idPropiedad).subscribe((data: any) => {
      this.propiedad = data.propiedad;
      // Inicializar formulario con valores de la propiedad
      this.propiedadForm = this.fb.group({
        tipoPropiedad: [this.propiedad.tipoPropiedad],
        titulo: [this.propiedad.titulo],
        descripcion: [this.propiedad.descripcion],
        duenio: [this.propiedad.duenio],
        precio: [this.propiedad.precio],
        alquiler: [this.propiedad.alquiler],
        expensas: [this.propiedad.expensas],
        imagenes: [this.propiedad.imagenes],
        ubicacion: this.fb.group({
          provincia: [this.propiedad.ubicacion.provincia],
          municipio: [this.propiedad.ubicacion.municipio],
          direccion: [this.propiedad.ubicacion.direccion],
          piso_departamento: [this.propiedad.ubicacion.piso_departamento],
          codigoPostal: [this.propiedad.ubicacion.codigoPostal]
        }),
        caracteristicas: this.fb.group({
          cantidadAmbientes: [this.propiedad.caracteristicas.cantidadAmbientes],
          m2Totales: [this.propiedad.caracteristicas.m2Totales],
          m2Cubiertos: [this.propiedad.caracteristicas.m2Cubiertos],
          cantidadBanios: [this.propiedad.caracteristicas.cantidadBanios],
          cantidadDormitorios: [this.propiedad.caracteristicas.cantidadDormitorios],
          cantidadToilettes: [this.propiedad.caracteristicas.cantidadToilettes],
          anioConstruccionRemodelacion: [this.propiedad.caracteristicas.anioConstruccionRemodelacion],
          cantidadPlantas: [this.propiedad.caracteristicas.cantidadPlantas],
          cantidadGarages: [this.propiedad.caracteristicas.cantidadGarages],
          cantidadElevadores: [this.propiedad.caracteristicas.cantidadElevadores],
          parrilla: [this.propiedad.caracteristicas.parrilla],
          pileta: [this.propiedad.caracteristicas.pileta],
          balcon: [this.propiedad.caracteristicas.balcon],
          patio: [this.propiedad.caracteristicas.patio],
          gimnasio: [this.propiedad.caracteristicas.gimnasio],
          seguridad: [this.propiedad.caracteristicas.seguridad]
        })});
      // Actualizar municipios según la provincia seleccionada
      this.actualizarMunicipios(this.propiedad.ubicacion.provincia);
    });
  }

  onSubmit() {
    const propiedadData = {
      ...this.propiedadForm.value,
      id: this.propiedad.id,
      duenio: this.propiedad.duenio,
      preguntas: this.propiedad.preguntas,
    };


    const imagenesNuevas:string[]= this.nombreImagenes();


    const formData: FormData = new FormData();

    this.selectedImages.forEach((imagen: File, index: number): void => {
      propiedadData.imagenes.push(imagenesNuevas[index]);
      formData.append('img', imagen, imagenesNuevas[index]);
    });


    if (this.propiedadForm.valid) {
      console.log('Formulario válido');
      this.propiedadService.putPropiedad(propiedadData as IPropiedad).subscribe(() => {
        console.log('Propiedad agregada con éxito');
        this.propiedadService.postImg(formData).subscribe(() => {
          this.router.navigateByUrl('/mi-cuenta');
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
