import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../services/auth-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor( private authService: AuthService, private router: Router ) {}

  public logged: boolean = this.authService.loggedIn();

  public logout(): void{
    this.authService.logout();
  }

  public login(): void{
    this.router.navigate(['/login']);
  }

  public register(): void{
    this.router.navigate(['/register']);
  }

  public inicio(): void{
    this.router.navigate(['/']);
  }

  public miCuenta(): void{
    this.router.navigate(['/mi-cuenta']);
  }

  public argegarCasa(): void{
    this.router.navigate(['/agregarPropiedad']);
  }
}
