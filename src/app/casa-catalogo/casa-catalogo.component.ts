import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-casa-catalogo',
  standalone: true,
  imports: [ CommonModule,
    RouterModule],
  templateUrl: './casa-catalogo.component.html',
  styleUrl: './casa-catalogo.component.css'
})
export class CasaCatalogoComponent {

}
