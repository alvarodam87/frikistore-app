import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  // CLAVE: Debes definir esta lista para que el HTML pueda leerla[cite: 25]
  valores = [
    { icono: 'bi-gem', titulo: 'Autenticidad', desc: 'Solo productos 100% originales.' },
    { icono: 'bi-heart-fill', titulo: 'Pasión', desc: 'Somos coleccionistas ayudando a coleccionistas.' },
    { icono: 'bi-shield-check', titulo: 'Confianza', desc: 'Envíos protegidos y garantizados.' }
  ];
}
