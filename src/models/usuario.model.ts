
import { IDireccion } from './direccion.model';
export interface IUsuario {
  id: number;
  dni: number;
  mail: string;
  telefono: string;
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  contrasenia: string;
  fechaNacimiento: Date;
  direccion: IDireccion;
}

