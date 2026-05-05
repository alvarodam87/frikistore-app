import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, CommonModule, NgOptimizedImage], // <--- AQUÍ
  templateUrl: './inicio.html',
})
export class Inicio {
  // Lista para la sección de Licencias Populares
  listaLicencias = [
    { nombre: 'One Piece', imagen: 'assets/images/logoonepiece.png' },
    { nombre: 'Zelda', imagen: 'assets/images/logozelda.jpg' },
    { nombre: 'Dragon Ball Z', imagen: 'assets/images/logodragonball.jpg' },
    { nombre: 'Naruto', imagen: 'assets/images/logonaruto.jpg' },
  ];

  // Lista para la sección de Lo Más Vendido
  listaMasVendidos = [
    { nombre: 'Luffy Gear 5', precio: '45.99', imagen: 'assets/images/figuraluffy.jpg' },
    { nombre: 'Itachi Uchiha', precio: '52.99', imagen: 'assets/images/figuraitachi.jpg' },
    { nombre: 'Goku Super Saiyan', precio: '55.99', imagen: 'assets/images/figuragoku.jpg' },
    { nombre: 'Link (Zelda)', precio: '48.99', imagen: 'assets/images/figurazelda2.jpg' },
  ];
}
