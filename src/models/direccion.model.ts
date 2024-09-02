export interface IDireccion {
  calle: string;
  numero: number;
  piso?: number;
  departamento?: string;
  provincia: string;
  ciudad: string;
  codigoPostal: number;
}