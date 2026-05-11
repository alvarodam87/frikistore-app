import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private http = inject(HttpClient);

  // 👉 ESTA ES LA RUTA EXACTA QUE HAS COMPROBADO QUE FUNCIONA
  private jsonUrl = '/assets/data/productos.json';

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.jsonUrl);
  }

  getProductoById(id: number): Observable<Producto | undefined> {
    return this.getProductos().pipe(
      map(productos => productos.find(p => p.id === id))
    );
  }
}
