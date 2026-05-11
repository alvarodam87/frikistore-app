import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CartService } from '../../services/cart.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './producto-detalle.html'
})
export class ProductoDetalle implements OnInit {
  private route = inject(ActivatedRoute);
  private productosService = inject(ProductosService);
  private cartService = inject(CartService);

  public producto: Producto | undefined;

  ngOnInit() {
    // 1. Leemos el ID de la URL
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : 0;

    // 2. Buscamos el producto en el JSON
    this.productosService.getProductoById(id).subscribe({
      next: (data) => this.producto = data,
      error: (e) => console.error('Error al cargar detalle:', e)
    });
  }

  agregarAlCarrito() {
    if (this.producto) {
      this.cartService.addToCart({
        name: this.producto.nombre,
        price: this.producto.precio,
        img: this.producto.imagen
      });
      alert('¡Figura añadida al equipo!');
    }
  }
}
