import { TipoPropiedad } from './TipoPropiedad.model';
import Caracteristicas, { ICaracteristicas } from './Caracteristicas.model';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IPropiedad {
  id: number;
  titulo: string;
  descripcion: string;
  duenio: number;
  precio: number;
  alquiler: boolean;
  tipoPropiedad: TipoPropiedad;
  expensas: number;
  imagenes: [string];
  caracteristicas: ICaracteristicas;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  titulo?: string,
  descripcion?: string,
  duenio?: number,
  precio?: number,
  alquiler?: boolean,
  tipoPropiedad?: TipoPropiedad,
  expensas?: number,
  imagenes?: [string],
  caracteristicas?: ICaracteristicas,
  id?: number// id last cause usually set by db
): IPropiedad {
  return {
    id: (id ?? -1),
    titulo: (titulo ?? ''),
    descripcion: (descripcion ?? ''),
    duenio: (duenio ?? 0),
    precio: (precio ?? 0),
    alquiler: (alquiler ?? false),
    tipoPropiedad: (tipoPropiedad ?? TipoPropiedad.CASA),
    expensas: (expensas ?? 0),
    imagenes: (imagenes ?? ['']),
    caracteristicas: (caracteristicas ?? Caracteristicas.new()),
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IPropiedad {
  if (!isPropiedad(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IPropiedad;
  return new_(p.titulo, p.descripcion, p.duenio, p.precio, p.alquiler, p.tipoPropiedad, p.expensas, p.imagenes, p.caracteristicas,p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isPropiedad(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'titulo' in arg && typeof arg.titulo === 'string' &&
    'descripcion' in arg && typeof arg.descripcion === 'string' &&
    'duenio' in arg && typeof arg.duenio === 'object' &&
    'precio' in arg && typeof arg.precio === 'number' &&
    'alquiler' in arg && typeof arg.alquiler === 'boolean' &&
    'tipoPropiedad' in arg && typeof arg.tipoPropiedad === 'string' &&
    'expensas' in arg && typeof arg.expensas === 'number' &&
    'imagenes' in arg && Array.isArray(arg.imagenes) &&
    'caracteristicas' in arg && Caracteristicas.isCaracteristicas(arg.caracteristicas)
    );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isPropiedad,
} as const;