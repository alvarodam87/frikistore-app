import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private http = inject(HttpClient);
  private jsonUrl = 'data/productos.json';

  // Ahora el servicio sabe que devuelve un array de objetos tipo "Producto"
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.jsonUrl);
  }
}
