import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponent} from "./navbar/navbar.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegisterComponent } from './register/register.component';
import { AgregarPropiedadComponent } from './agregar-propiedad/agregar-propiedad.component';
import { LoginComponent } from './login/login.component';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { routes } from './app.routes';
import {MapaComponent} from "./mapa/mapa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CatalogoComponent,
    PropiedadComponent,
    LoginComponent,
    RegisterComponent,
    AgregarPropiedadComponent,
    NavbarComponent,
    MapaComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pernado';
}
