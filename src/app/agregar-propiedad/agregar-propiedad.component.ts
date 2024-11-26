import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoPropiedad } from '../../models/TipoPropiedad';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PropiedadApiService } from '../services/propiedad-api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-agregar-propiedad',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './agregar-propiedad.component.html',
  styleUrls: ['./agregar-propiedad.component.css']
})
export class AgregarPropiedadComponent implements OnInit {
  propiedadForm!: FormGroup;
  tiposPropiedad: TipoPropiedad[] = Object.values(TipoPropiedad);
  selectedImages: string[] = [];

  // Mapeo de los valores de tipo propiedad (nombre -> número)
  tipoPropiedadMap: { [key in TipoPropiedad]: number } = {
    [TipoPropiedad.CASA]: 1,
    [TipoPropiedad.DEPARTAMENTO]: 2,
    [TipoPropiedad.PH]: 3,
    [TipoPropiedad.LOCAL]: 4,
    [TipoPropiedad.OFICINA]: 5,
    [TipoPropiedad.COCHERA]: 6,
    [TipoPropiedad.TERRENOS_Y_LOTES]: 7,
    [TipoPropiedad.CONSULTORIO]: 8,
    [TipoPropiedad.QUINTA]: 9,
    [TipoPropiedad.CHACRA]: 10,
    [TipoPropiedad.GALPON]: 11,
    [TipoPropiedad.DEPOSITO]: 12,
    [TipoPropiedad.CAMPO]: 13,
    [TipoPropiedad.HOTEL]: 14,
    [TipoPropiedad.EDIFICIO]: 15,
    [TipoPropiedad.OTRO]: 16
  };

  constructor(
    private fb: FormBuilder,
    private propiedadService: PropiedadApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.propiedadForm = this.fb.group({
      tipoPropiedad: [TipoPropiedad.CASA, Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      duenio: [''],
      precio: ['', Validators.required],
      alquiler: [false],
      expensas: [0, Validators.required],
      imagenes: [[]],
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
        seguridad: [false],
        mascotas: [false]
      })
    });
  }

  onImageSelected(event: any) {
    const files = event.target.files;
    this.selectedImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.selectedImages.push(URL.createObjectURL(file));  // Guardar solo la URL temporal de la imagen
    }
  }


    onSubmit() {
      const propiedadData = {
        ...this.propiedadForm.value,
        id: -1,
        duenio: null,
        imagenes: [],
        preguntas: [],
      };

      console.log('Datos de la Propiedad:', propiedadData);

      if (this.propiedadForm.valid) {
        this.propiedadService.postPropiedad(propiedadData).subscribe(
          () => {
            this.router.navigateByUrl('/');
            console.log('Propiedad agregada con éxito');
          },
          (error: HttpErrorResponse) => {
            console.error('Error al agregar propiedad', error);
          }
        );
      } else {
        console.log('Formulario inválido');
        this.propiedadForm.markAllAsTouched();
      }
    }

}
