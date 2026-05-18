import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CartService } from '../../services/cart.service';
import { Producto } from '../../common/producto';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalogo.html'
})
export class Catalogo implements OnInit {
  public listaProductos: Producto[] = [];

  // Inyección por constructor según las notas
  constructor(
    private serviceProductos: ProductosService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadInfo();
  }


  private loadInfo() {
    this.serviceProductos.getProductos().subscribe({
      next: (data) => {
        this.listaProductos = data;
        console.log("Datos cargados:", this.listaProductos);
        this.cdr.detectChanges(); // Previene el fallo de la pantalla vacía
      },
      error: (err) => console.error("Error al cargar datos:", err),
      complete: () => console.info('Carga completada.')
    });
  }

  agregarAlCarrito(prod: Producto) {
    this.cartService.addToCart({
      name: prod.nombre,
      price: prod.precio,
      img: prod.imagen
    });
  }
}
