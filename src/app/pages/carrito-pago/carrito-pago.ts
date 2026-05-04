import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // He quitado NgOptimizedImage de aquí
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrito-pago',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // También lo he quitado de este array
  templateUrl: './carrito-pago.html',
  styleUrl: './carrito-pago.css'
})
export class CarritoPago {
  public cartService = inject(CartService);

  // Variable para controlar metodo de pago
  metodoSeleccionado: string = '';

  procesarCompra(formulario: NgForm) {
    if (formulario.valid && this.metodoSeleccionado) {
      console.log('Datos de Envío:', formulario.value);
      console.log('Método de Pago:', this.metodoSeleccionado);

      alert('¡Pedido realizado con éxito, Nakama! Revisa tu email.');
    }
  }
}
