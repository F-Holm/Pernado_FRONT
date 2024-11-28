import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgregarPropiedadComponent } from './agregar-propiedad/agregar-propiedad.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import {AuthGuard, AuthGuardLogged} from "./services/auth.guard";
import {MiCuentaComponent} from "./mi-cuenta/mi-cuenta.component";
import { PropiedadComponent } from './propiedad/propiedad.component';
import {ModificarPropiedadComponent} from "./modificar-propiedad/modificar-propiedad.component";
import {ModificarCuentaComponent} from "./modificar-cuenta/modificar-cuenta.component";
import {ChatsComponent} from "./chats/chats.component";
import {ResponderComponent} from "./responder/responder.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full", canActivate: [AuthGuardLogged] },
  { path: "register", component: RegisterComponent, pathMatch: "full", canActivate: [AuthGuardLogged] },
  { path: "agregarPropiedad", component:AgregarPropiedadComponent,pathMatch:"full", canActivate: [AuthGuard] },
  { path: "", component:CatalogoComponent,pathMatch:"full" },
  { path: "mi-cuenta", component:MiCuentaComponent,pathMatch:"full", canActivate: [AuthGuard] },
  { path: "propiedad/:id", component:PropiedadComponent,pathMatch:"full" },
  { path: "modificarPropiedad/:id", component:ModificarPropiedadComponent,pathMatch:"full", canActivate: [AuthGuard] },
  { path: "modificarCuenta/:id", component:ModificarCuentaComponent,pathMatch:"full", canActivate: [AuthGuard] },
  { path: "chats", component:ChatsComponent,pathMatch:"full", canActivate: [AuthGuard] },
  { path: "preguntas", component:ResponderComponent,pathMatch:"full", canActivate: [AuthGuard] },
  { path: "usuarios", component:UsuariosComponent,pathMatch:"full", canActivate: [AuthGuard] },
];
