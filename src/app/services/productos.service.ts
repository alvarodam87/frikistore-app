import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // Variable tal cual la pide el profe
  private URL: string = '/assets/data/productos.json';

  // Inyección mediante constructor (estilo de las notas)
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.URL);
  }

  getProductoById(id: number): Observable<Producto | undefined> {
    return this.getProductos().pipe(
      map(productos => productos.find(p => p.id === id))
    );
  }
}
