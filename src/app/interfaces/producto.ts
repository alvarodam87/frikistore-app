export interface Producto {
  id: number;
  nombre: string;
  serie: string;
  precio: number;
  imagen: string;
  nuevo: boolean;
  descripcion?: string; // El ? significa que es opcional, por si quieres añadirla luego
}
