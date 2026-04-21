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

  enviarMensaje(form: NgForm) {
    if (form.valid) {
      this.mensajeEnviado = true;
      form.resetForm();
      setTimeout(() => this.mensajeEnviado = false, 4000);
    }
  }
}
