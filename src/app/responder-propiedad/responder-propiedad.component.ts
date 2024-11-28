import {Component, Input, OnInit} from '@angular/core';
import {IPropiedad} from "../../models/Propiedad";
import pregunta, {IPregunta} from "../../models/Pregunta";
import {FormsModule} from "@angular/forms";
import {PropiedadApiService} from "../services/propiedad-api.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-responder-propiedad',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './responder-propiedad.component.html',
  styleUrl: './responder-propiedad.component.css'
})
export class ResponderPropiedadComponent implements OnInit {
  @Input() propiedad!: IPropiedad;
  preguntaSinResponder: number = -1;
  respuesta: string = '';

  constructor (private propiedadService: PropiedadApiService) {}

  ngOnInit(): void {
    this.propiedad.preguntas.forEach((pregunta, indice) => {
      if (pregunta.respuesta == '') {
        this.preguntaSinResponder = indice;
      }
    })
  }

  responder(): void{
    this.propiedad.preguntas[this.preguntaSinResponder].respuesta = this.respuesta;
    this.propiedadService.putPropiedad(this.propiedad).subscribe((data: any) => {
      location.reload();
    })
  }
}
