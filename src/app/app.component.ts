import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegisterComponent } from './register/register.component';
import { AgregarcasaComponent } from './agregarcasa/agregarcasa.component';
import { LoginComponent } from './login/login.component';
import { CasaCatalogoComponent } from './casa-catalogo/casa-catalogo.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, // Aquí se incluyen las rutas
    CatalogoComponent,  // Importa los componentes directamente
    CasaCatalogoComponent,
    LoginComponent,
    RegisterComponent,
    AgregarcasaComponent
  ], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pernado';
}
