import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-accesorios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './accesorios.html',
  styleUrl: './accesorios.css'
})
export class Accesorios implements OnInit {
  public listaAccesorios: any[] = [];

  constructor(
    private serviceProductos: ProductosService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadInfo();
  }

  private loadInfo() {
    this.serviceProductos.getAccesorios().subscribe({
      next: (data) => {
        this.listaAccesorios = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error al cargar accesorios:', err),
      complete: () => console.info('Carga completada.')
    });
  }

  agregarAlCarrito(acc: any) {
    this.cartService.addToCart({
      name: acc.nombre,
      price: acc.precio,
      img: acc.imagen
    });
  }
}
