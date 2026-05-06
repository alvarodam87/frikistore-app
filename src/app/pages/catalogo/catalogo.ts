import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  public cartService = inject(CartService);

  public listaProductos = [
    {
      nombre: 'Figura Luffy Gear 5',
      precio: 89.99,
      imagen: 'assets/images/luffy.jpg',
      serie: 'One Piece',
      nuevo: true,
    },
    {
      nombre: 'Figura Pokémon',
      precio: 45.5,
      imagen: 'assets/images/figurapokemon.jpg',
      serie: 'Pokémon',
      nuevo: false,
    },
    {
      nombre: 'Figura Zelda Master',
      precio: 72.0,
      imagen: 'assets/images/figurazelda2.jpg',
      serie: 'The Legend of Zelda',
      nuevo: true,
    },
    {
      nombre: 'Figura Naruto Shippuden',
      precio: 65.0,
      imagen: 'assets/images/figuranaruto2.jpg',
      serie: 'Naruto',
      nuevo: false,
    },
  ];

  agregarAlCarrito(nombre: string, precio: number, imagen: string) {
    this.cartService.addToCart({ name: nombre, price: precio, img: imagen });
  }
}
