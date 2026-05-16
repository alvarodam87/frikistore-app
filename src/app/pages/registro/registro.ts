import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  registrarUsuario() {

    alert('¡Genial! Cuenta creada con éxito. Bienvenid@ a FrikiStore.');
  }

}
