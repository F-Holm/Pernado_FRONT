import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgregarcasaComponent } from './agregarcasa/agregarcasa.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent, pathMatch: "full" },
    { path: "register", component: RegisterComponent, pathMatch: "full" },
    {path:"agregarCasas", component:AgregarcasaComponent,pathMatch:"full"}
];