import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; // <--- Añade NgOptimizedImage

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage], // <--- Añádelo aquí también
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  // ... tu lógica
}
