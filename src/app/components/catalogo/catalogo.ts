import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; // <-- ¡Vital!
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage], // <-- ¡Asegúrate de que esté aquí!
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {
  public cartService = inject(CartService);

  public listaProductos = [
    { nombre: 'Figura Luffy Gear 5', precio: 89.99, imagen: 'assets/images/luffy.jpg', serie: 'One Piece', nuevo: true },
    { nombre: 'Figura Pokémon', precio: 45.50, imagen: 'assets/images/figurapokemon.jpg', serie: 'Pokémon', nuevo: false },
    { nombre: 'Figura Zelda Master', precio: 72.00, imagen: 'assets/images/figurazelda2.jpg', serie: 'The Legend of Zelda', nuevo: true },
    { nombre: 'Figura Naruto Shippuden', precio: 65.00, imagen: 'assets/images/figuranaruto2.jpg', serie: 'Naruto', nuevo: false }
  ];

  // Esta función mantiene la estructura de datos que espera tu servicio de carrito
  agregarAlCarrito(nombre: string, precio: number, imagen: string) {
    this.cartService.addToCart({
      name: nombre,
      price: precio,
      img: imagen
    });
  }
}
