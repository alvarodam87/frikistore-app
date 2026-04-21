import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html'
})
export class ContactoComponent {
  mensajeEnviado = false;
  errorEnvio = false;

  enviarMensaje(form: NgForm) {
    if (form.invalid) {
      this.errorEnvio = true;
      this.mensajeEnviado = false;
      return;
    }

    // Si todo está bien
    this.errorEnvio = false;
    this.mensajeEnviado = true;
    form.resetForm();

    // Ocultar el mensaje de éxito después de 5 segundos
    setTimeout(() => {
      this.mensajeEnviado = false;
    }, 5000);
  }
}
