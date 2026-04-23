import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage], // Necesario para ngSrc
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css'
})
export class ProductoDetalle {
  public cartService = inject(CartService);

  // CORRECCIÓN: Ahora acepta los 3 datos que envías desde el HTML
  agregarAlCarrito(nombre: string, precio: number, imagen: string) {
    this.cartService.addToCart({
      name: nombre,
      price: precio,
      img: imagen
    });
  }
}
