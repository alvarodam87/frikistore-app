import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs'; // Añadimos forkJoin
import { Producto } from '../common/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private URL: string = '/assets/data/productos.json';
  private URL_ACCESORIOS: string = '/assets/data/accesorios.json';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.URL);
  }

  getAccesorios(): Observable<any[]> {
    return this.http.get<any[]>(this.URL_ACCESORIOS);
  }


  getProductoById(id: number): Observable<any | undefined> {
    return forkJoin([this.getProductos(), this.getAccesorios()]).pipe(
      map(([productos, accesorios]) => {
        // Primero busca en figuras
        const figura = productos.find(p => p.id === id);
        if (figura) return figura;

        // Si no lo encuentra, busca en accesorios
        return accesorios.find(a => a.id === id);
      })
    );
  }
}
