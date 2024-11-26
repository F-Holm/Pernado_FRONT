import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgregarPropiedadComponent } from './agregar-propiedad/agregar-propiedad.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import {AuthGuard, AuthGuardLogged} from "./services/auth.guard";
import {MiCuentaComponent} from "./mi-cuenta/mi-cuenta.component";
import { PropiedadComponent } from './propiedad/propiedad.component';
import {MapaComponent} from "./mapa/mapa.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full", canActivate: [AuthGuardLogged] },
  { path: "register", component: RegisterComponent, pathMatch: "full", canActivate: [AuthGuardLogged] },
  { path: "agregarPropiedad", component:AgregarPropiedadComponent,pathMatch:"full", canActivate: [AuthGuard] },
  { path: "", component:CatalogoComponent,pathMatch:"full" },
  { path: "mi-cuenta", component:MiCuentaComponent,pathMatch:"full", canActivate: [AuthGuard] },
  { path: "propiedad/:id", component:PropiedadComponent,pathMatch:"full" },
];
