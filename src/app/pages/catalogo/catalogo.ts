import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; // Asegúrate de esta línea
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CartService } from '../../services/cart.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink], // NgOptimizedImage debe estar aquí
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {
  private productosService = inject(ProductosService);
  private cartService = inject(CartService);

  public listaProductos: Producto[] = [];

  ngOnInit() {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.listaProductos = data;
      },
      error: (err) => console.error('Error al leer el JSON:', err)
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
