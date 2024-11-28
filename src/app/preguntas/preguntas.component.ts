import {Component, Input} from '@angular/core';
import {IPregunta} from "../../models/Pregunta";
import {FormsModule} from "@angular/forms";
import {PropiedadApiService} from "../services/propiedad-api.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent {
  @Input() preguntas!: IPregunta[];
  @Input() idPropiedad!: number;
  preg: string = '';

  constructor (private propiedadService: PropiedadApiService) {}

  preguntar(): void{
    this.propiedadService.postPregunta(this.preg, this.idPropiedad).subscribe((data: any) => {
      location.reload();
    })
  }
}
