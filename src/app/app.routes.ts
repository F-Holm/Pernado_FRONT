import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgregarcasaComponent } from './agregarcasa/agregarcasa.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import {AuthGuard, AuthGuardLogged} from "./services/auth.guard";
import {MiCuentaComponent} from "./mi-cuenta/mi-cuenta.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full", canActivate: [AuthGuardLogged] },
  { path: "register", component: RegisterComponent, pathMatch: "full", canActivate: [AuthGuardLogged] },
  { path: "agregarCasa", component:AgregarcasaComponent,pathMatch:"full", canActivate: [AuthGuard] },
  { path: "", component:CatalogoComponent,pathMatch:"full" },
  { path: "mi-cuenta", component:MiCuentaComponent,pathMatch:"full", canActivate: [AuthGuard] },
];
