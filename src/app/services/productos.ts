import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // Al estar en la carpeta 'public', Angular lo encuentra directamente en la raíz
  private jsonUrl = 'productos.json';

  constructor(private http: HttpClient) { }

  //Este metodo es el que usara el equipo para listar los productos
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
