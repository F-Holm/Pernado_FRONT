import { TipoPropiedad } from './tipopropiedad.model';
import  { ICaracteristicas } from './caracterisitcas.model';
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