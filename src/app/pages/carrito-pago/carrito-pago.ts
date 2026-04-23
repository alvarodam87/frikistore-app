import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
// CORRECCIÓN: Ruta al archivo .ts del servicio real
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrito-pago',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './carrito-pago.html',
  styleUrl: './carrito-pago.css'
})
export class CarritoPago {
  // CLAVE: 'public' para que el HTML no dé error TS2339
  public cartService = inject(CartService);
}
