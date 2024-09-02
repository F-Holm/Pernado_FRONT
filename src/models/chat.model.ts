import { IMensaje } from './mensaje.model';
export interface IChat {
  id: number;
  mensajes: [IMensaje];
  vendedor: number;
  comprador: number;
}

