import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLog: FormGroup;

  constructor(
    private servicio: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formLog = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      contra: ['', Validators.required]
    });
  }

  log(): void {
    if (this.formLog.valid) {
      const { mail, contra } = this.formLog.value;
      console.log(mail, contra);
      // Descomentar para enviar datos al servicio
      /*
      this.servicio.logUser(mail, contra).subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/');
      });
      */
    } else {
      console.log('Formulario inválido');
      this.formLog.markAllAsTouched();
    }
  }
}
