  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
  import { TipoPropiedad } from '../../models/TipoPropiedad.model';
  import { CommonModule } from '@angular/common';
  import { Router, RouterModule } from '@angular/router';
  import { PropiedadApiService } from '../propiedad-api.service';
  import { HttpErrorResponse } from '@angular/common/http';
  
  @Component({
    selector: 'app-agregarcasa',
    standalone: true,
    imports: [ReactiveFormsModule,
      CommonModule,
      RouterModule],
    templateUrl: './agregarcasa.component.html',
    styleUrl: './agregarcasa.component.css'
  })
  export class AgregarcasaComponent implements OnInit {
    propiedadForm!: FormGroup;
    tiposPropiedad = Object.values(TipoPropiedad);  // Convertir el enum a un array
    selectedImages: string[] = [];
    
    constructor(private fb: FormBuilder,
      private propiedadService: PropiedadApiService,
      private router: Router) { }

    ngOnInit() {
      this.propiedadForm = this.fb.group({
        tipoPropiedad: [TipoPropiedad.CASA, Validators.required],
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required],
        duenio: ['', Validators.required],
        precio: ['', Validators.required],
        alquiler: [false],
        expensas: ['', Validators.required],
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
      if (this.propiedadForm.valid) {
        this.propiedadService.postPropiedad(this.propiedadForm.value).subscribe(
          () => {
            this.router.navigateByUrl('/');
            console.log('Usuario agregado con éxito');
          },
          (error: HttpErrorResponse) => {
            console.error('Error al agregar usuario', error);
          }
        );
      } else {
        console.log('Formulario inválido');
        this.propiedadForm.markAllAsTouched();
      }
    }
  }

