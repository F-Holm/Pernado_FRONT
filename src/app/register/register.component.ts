import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { IDireccion } from '../../models/direccion.model';
import { IUsuario } from '../../models/usuario.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      nombre: ['', Validators.required],
      lastname: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      piso: [''],
      departamento: [''],
      provincia: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigoPostal: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  agregarUsuario() {
    if (this.registerForm.valid) {
      const {
        email,
        password,
        confirmPassword,
        nombre,
        lastname,
        dni,
        telefono,
        nombreUsuario,
        fechaNacimiento,
        calle,
        numero,
        piso,
        departamento,
        provincia,
        ciudad,
        codigoPostal
      } = this.registerForm.value;

      console.log(email, password, confirmPassword, nombre, lastname, dni, telefono, nombreUsuario, fechaNacimiento, calle, numero, piso, departamento, provincia, ciudad, codigoPostal);

      if (password !== confirmPassword) {
        console.error('Las contraseñas no coinciden');
        return;
      }

      const direccion: IDireccion = {
        calle,
        ciudad,
        numero,
        provincia,
        codigoPostal,
        piso,
        departamento
      };

      const fechaNacimientoDate = new Date(fechaNacimiento);

      const usuario: IUsuario = {
        id: -1,
        dni,
        mail: email,
        telefono,
        nombre,
        apellido: lastname,
        nombreUsuario,
        contrasenia: password,
        fechaNacimiento: fechaNacimientoDate,
        direccion
      };
        console.log(usuario);
      this.usuarioService.agregarUsuario(usuario).subscribe(
        response => {
          this.router.navigateByUrl('/');
          console.log('Usuario agregado con éxito');
        },
        error => {
          console.error('Error al agregar usuario', error);
        }
      );
    } else {
      console.log('Formulario inválido');
      this.registerForm.markAllAsTouched();
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
}
