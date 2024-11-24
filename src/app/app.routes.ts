import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgregarcasaComponent } from './agregarcasa/agregarcasa.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import {AuthGuard} from "./services/auth.guard";
import {MiCuentaComponent} from "./mi-cuenta/mi-cuenta.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "agregarCasas", component:AgregarcasaComponent,pathMatch:"full"},
  { path: "", component:CatalogoComponent,pathMatch:"full"},
  { path: "mi-cuenta", component:MiCuentaComponent,pathMatch:"full"},

  {
    path:'',
    canActivate: [AuthGuard],
    children: [
      {path:'agregarCasas', component: AgregarcasaComponent},
      {path:'mi-cuenta', component: MiCuentaComponent},
    ],
  },
  /*{
    path:'',
    canActivate: [AuthGuardLogged],
    children: [
      {path:'loggin', component: AgregarcasaComponent},
      {path:'register', component: MiCuentaComponent},
    ],
  },*/
];
