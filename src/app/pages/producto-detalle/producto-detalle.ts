import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './producto-detalle.html'
})
export class ProductoDetalle implements OnInit {
  // Paso 0 de las notas: Atrapamos el ID de la URL
  @Input('id') id!: string;

  public producto: any;

  constructor(
    private serviceProductos: ProductosService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getDetalle();
  }

  // Paso 2 de las notas: Lógica de carga
  private getDetalle() {
    // Convertimos el ID de la URL a número
    const idConvertido = Number(this.id);

    this.serviceProductos.getProductoById(idConvertido).subscribe({
      next: (data) => {
        this.producto = data;
        console.log("Detalle cargado:", this.producto);
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Error al cargar personaje:", err),
      complete: () => console.info('Carga de detalle completada.')
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
