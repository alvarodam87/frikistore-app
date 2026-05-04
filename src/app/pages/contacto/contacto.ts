import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  mensajeEnviado = false;
  errorEnvio = false;

  enviarMensaje(formulario: NgForm) {
    if (formulario.valid) {
      console.log('Mensaje recibido:', formulario.value);
      this.mensajeEnviado = true;
      this.errorEnvio = false;

      // Limpiar el formulario después de 3 segundos
      setTimeout(() => {
        formulario.reset();
        this.mensajeEnviado = false;
      }, 4000);
    } else {
      this.errorEnvio = true;
    }
  }
}
