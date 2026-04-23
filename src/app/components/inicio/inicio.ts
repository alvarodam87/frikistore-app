import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'] // Asegúrate de que este archivo exista
})
export class Inicio {

}
