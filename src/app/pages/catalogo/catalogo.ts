import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto'; // Importamos tu nueva interfaz

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {
  // 1. Array vacío que se llenará con el JSON
  public listaProductos: Producto[] = [];

  // 2. Inyectamos el servicio de productos
  private productosService = inject(ProductosService);

  ngOnInit() {
    // 3. Al iniciar, llamamos al servicio
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.listaProductos = data; // Guardamos los 12 productos
      },
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }
}
