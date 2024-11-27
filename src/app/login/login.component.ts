import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth-api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLog: FormGroup;

  constructor(
    private servicio: AuthService,
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
      // Obtén los valores del formulario
      const { mail, contra } = this.formLog.value;
      console.log(mail, contra);
    }
    else {
      // Muestra errores si el formulario no es válido
      console.log('Formulario inválido');
      this.formLog.markAllAsTouched();
    }

    this.servicio.logUser(this.formLog.get('mail')?.value, this.formLog.get('contra')?.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      location.reload();
      //this.router.navigateByUrl('/');
    });
  }

}
