import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Propiedad, { IPropiedad } from '../../models/Propiedad';
import { PropiedadApiService } from '../services/propiedad-api.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {IFiltrosPropiedad} from "../../models/FiltrosPropiedad";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  propiedades: IPropiedad[] = [];
  indice: number = 0;
  imagenesMostradasPorPagina: number = 20;
  cant: number = 0;
  filtrosForm!: FormGroup;
  mostrarFiltros: boolean = false;
  query: any = {};
  busqueda: string = '';
  defaultImage: string = 'assets/image.png';

  constructor(private propiedadService: PropiedadApiService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getCant();
    this.obtener();
    this.setForm();
  }

  getImagen(propiedad: IPropiedad){
    return  Propiedad.getImg(propiedad, 0);
  }
        

  btnFiltros(): void {
    this.mostrarFiltros = !this.mostrarFiltros;
  }

  getCant(): void {
    this.propiedadService.getCantPropiedades().subscribe((data: any) => {
      this.cant = data.cant;
    })
  }

  obtener(): void {
    this.propiedadService.getPropiedadesFiltrosLimitSkip(this.query, this.imagenesMostradasPorPagina, this.indice).subscribe((data: any) => {
        this.propiedades = data.propiedades;
        if (this.query.titulo !== undefined && this.query.titulo !== null) delete this.query.titulo;
      },
      (error: any) => {
        console.error('Error al obtener propiedades:', error);
      }
    );
  }
  

  siguientePagina(): void{
    if (this.cant > this.indice + this.imagenesMostradasPorPagina) this.indice += this.imagenesMostradasPorPagina;
    this.obtener();
  }

  paginaAnterior(): void{
    if (0 != this.indice) this.indice -= this.imagenesMostradasPorPagina;
    this.obtener();
  }

  onReset(): void {
    this.filtrosForm.reset();
    this.query = {};
    this.obtener();
  }

  buscar(){
    this.indice = 0;
    this.query.titulo = { $regex: this.busqueda, $options: 'i' };
    this.obtener();
  }

  onSubmit(): void {
    const filtrosPropiedad: IFiltrosPropiedad = this.filtrosForm.value;
    this.query = this.toQuery(filtrosPropiedad);
    this.btnFiltros();
    this.buscar();
  }

  setForm(): void{
    this.filtrosForm = this.fb.group({
      precioMin: [undefined],
      precioMax: [undefined],
      alquiler: [undefined],
      tipoPropiedad: [undefined],
      expensasMin: [undefined],
      expensasMax: [undefined],
      provincia: [undefined],
      municipio: [undefined],
      cantidadAmbientesMin: [undefined],
      cantidadAmbientesMax: [undefined],
      m2TotalesMin: [undefined],
      m2TotalesMax: [undefined],
      m2CubiertosMin: [undefined],
      m2CubiertosMax: [undefined],
      cantidadBaniosMin: [undefined],
      cantidadBaniosMax: [undefined],
      cantidadDormitoriosMin: [undefined],
      cantidadDormitoriosMax: [undefined],
      cantidadToilettesMin: [undefined],
      cantidadToilettesMax: [undefined],
      anioConstruccionRemodelacionMin: [undefined],
      anioConstruccionRemodelacionMax: [undefined],
      cantidadPlantasMin: [undefined],
      cantidadPlantasMax: [undefined],
      cantidadGaragesMin: [undefined],
      cantidadGaragesMax: [undefined],
      cantidadElevadoresMin: [undefined],
      cantidadElevadoresMax: [undefined],
      parrilla: [undefined],
      pileta: [undefined],
      balcon: [undefined],
      patio: [undefined],
      gimnasio: [undefined],
      seguridad: [undefined]
    });
  }

  toQuery(filtros: IFiltrosPropiedad): any{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};

    if (filtros.precioMin !== null) query.precio = { ...query.precio, $gte: filtros.precioMin };
    if (filtros.precioMax !== null) query.precio = { ...query.precio, $lte: filtros.precioMax };
    if (filtros.alquiler !== null) query.alquiler = filtros.alquiler;
    if (filtros.tipoPropiedad !== null) query.tipoPropiedad = filtros.tipoPropiedad;
    if (filtros.expensasMin !== null) query.expensas = { ...query.expensas, $gte: filtros.expensasMin };
    if (filtros.expensasMax !== null) query.expensas = { ...query.expensas, $lte: filtros.expensasMax };
    if (filtros.provincia !== null) query['ubicacion.provincia'] = filtros.provincia;
    if (filtros.municipio !== null) query['ubicacion.municipio'] = filtros.municipio;
    if (filtros.cantidadAmbientesMin !== null) query['caracteristicas.cantidadAmbientes'] = { ...query['caracteristicas.cantidadAmbientes'], $gte: filtros.cantidadAmbientesMin };
    if (filtros.cantidadAmbientesMax !== null) query['caracteristicas.cantidadAmbientes'] = { ...query['caracteristicas.cantidadAmbientes'], $lte: filtros.cantidadAmbientesMax };
    if (filtros.m2TotalesMin !== null) query['caracteristicas.m2Totales'] = { ...query['caracteristicas.m2Totales'], $gte: filtros.m2TotalesMin };
    if (filtros.m2TotalesMax !== null) query['caracteristicas.m2Totales'] = { ...query['caracteristicas.m2Totales'], $lte: filtros.m2TotalesMax };
    if (filtros.m2CubiertosMin !== null) query['caracteristicas.m2Cubiertos'] = { ...query['caracteristicas.m2Cubiertos'], $gte: filtros.m2CubiertosMin };
    if (filtros.m2CubiertosMax !== null) query['caracteristicas.m2Cubiertos'] = { ...query['caracteristicas.m2Cubiertos'], $lte: filtros.m2CubiertosMax };
    if (filtros.cantidadBaniosMin !== null) query['caracteristicas.cantidadBanios'] = { ...query['caracteristicas.cantidadBanios'], $gte: filtros.cantidadBaniosMin };
    if (filtros.cantidadBaniosMax !== null) query['caracteristicas.cantidadBanios'] = { ...query['caracteristicas.cantidadBanios'], $lte: filtros.cantidadBaniosMax };
    if (filtros.cantidadDormitoriosMin !== null) query['caracteristicas.cantidadDormitorios'] = { ...query['caracteristicas.cantidadDormitorios'], $gte: filtros.cantidadDormitoriosMin };
    if (filtros.cantidadDormitoriosMax !== null) query['caracteristicas.cantidadDormitorios'] = { ...query['caracteristicas.cantidadDormitorios'], $lte: filtros.cantidadDormitoriosMax };
    if (filtros.cantidadToilettesMin !== null) query['caracteristicas.cantidadToilettes'] = { ...query['caracteristicas.cantidadToilettes'], $gte: filtros.cantidadToilettesMin };
    if (filtros.cantidadToilettesMax !== null) query['caracteristicas.cantidadToilettes'] = { ...query['caracteristicas.cantidadToilettes'], $lte: filtros.cantidadToilettesMax };
    if (filtros.anioConstruccionRemodelacionMin !== null) query['caracteristicas.anioConstruccionRemodelacion'] = { ...query['caracteristicas.anioConstruccionRemodelacion'], $gte: filtros.anioConstruccionRemodelacionMin };
    if (filtros.anioConstruccionRemodelacionMax !== null) query['caracteristicas.anioConstruccionRemodelacion'] = { ...query['caracteristicas.anioConstruccionRemodelacion'], $lte: filtros.anioConstruccionRemodelacionMax };
    if (filtros.cantidadPlantasMin !== null) query['caracteristicas.cantidadPlantas'] = { ...query['caracteristicas.cantidadPlantas'], $gte: filtros.cantidadPlantasMin };
    if (filtros.cantidadPlantasMax !== null) query['caracteristicas.cantidadPlantas'] = { ...query['caracteristicas.cantidadPlantas'], $lte: filtros.cantidadPlantasMax };
    if (filtros.cantidadGaragesMin !== null) query['caracteristicas.cantidadGarages'] = { ...query['caracteristicas.cantidadGarages'], $gte: filtros.cantidadGaragesMin };
    if (filtros.cantidadGaragesMax !== null) query['caracteristicas.cantidadGarages'] = { ...query['caracteristicas.cantidadGarages'], $lte: filtros.cantidadGaragesMax };
    if (filtros.cantidadElevadoresMin !== null) query['caracteristicas.cantidadElevadores'] = { ...query['caracteristicas.cantidadElevadores'], $gte: filtros.cantidadElevadoresMin };
    if (filtros.cantidadElevadoresMax !== null) query['caracteristicas.cantidadElevadores'] = { ...query['caracteristicas.cantidadElevadores'], $lte: filtros.cantidadElevadoresMax };
    if (filtros.parrilla !== null) query['caracteristicas.parrilla'] = filtros.parrilla;
    if (filtros.pileta !== null) query['caracteristicas.pileta'] = filtros.pileta;
    if (filtros.balcon !== null) query['caracteristicas.balcon'] = filtros.balcon;
    if (filtros.patio !== null) query['caracteristicas.patio'] = filtros.patio;
    if (filtros.gimnasio !== null) query['caracteristicas.gimnasio'] = filtros.gimnasio;
    if (filtros.seguridad !== null) query['caracteristicas.seguridad'] = filtros.seguridad;

    return query;
  }

}
