import moment from 'moment';
import { IDireccion } from './Direccion';
import Direccion from './Direccion';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

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


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  dni?: number,
  mail?: string,
  telefono?: string,
  nombre?: string,
  apellido?: string,
  nombreUsuario?: string,
  contrasenia?: string,
  fechaNacimiento?: Date,
  direccion?: IDireccion,
  id?: number,
): IUsuario {
  return {
    id: (id ?? -1),
    dni: (dni ?? 0),
    mail: (mail ?? ''),
    telefono: (telefono ?? ''),
    nombre: (nombre ?? ''),
    apellido: (apellido ?? ''),
    nombreUsuario: (nombreUsuario ?? ''),
    contrasenia: (contrasenia ?? ''),
    fechaNacimiento: (fechaNacimiento ? new Date(fechaNacimiento) : new Date()),
    direccion: (direccion ?? Direccion.new())
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IUsuario {
  if (!isUsuario(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IUsuario;
  return new_(p.dni, p.mail, p.telefono, p.nombre, p.apellido, p.nombreUsuario, p.contrasenia, p.fechaNacimiento, p.direccion, p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isUsuario(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'dni' in arg && typeof arg.dni === 'number' &&
    'mail' in arg && typeof arg.mail === 'string' &&
    'telefono' in arg && typeof arg.telefono === 'string' &&
    'nombre' in arg && typeof arg.nombre === 'string' &&
    'apellido' in arg && typeof arg.apellido === 'string' &&
    'nombreUsuario' in arg && typeof arg.nombreUsuario === 'string' &&
    'contrasenia' in arg && typeof arg.contrasenia === 'string' &&
    'fechaNacimiento' in arg && moment(arg.fechaNacimiento as string | Date).isValid() &&
    'direccion' in arg && Direccion.isDireccion(arg.direccion)
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isUsuario,
} as const;
