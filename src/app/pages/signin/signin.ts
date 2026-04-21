import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.html'
})
export class SigninComponent {
  mostrarLogin = true;

  onLogin(form: NgForm) {
    if (form.valid) {
      console.log('Login datos:', form.value);
      alert('¡Bienvenido de nuevo!');
    }
  }

  onRegistro(form: NgForm) {
    if (form.valid) {
      console.log('Registro datos:', form.value);
      alert('¡Cuenta creada con éxito!');
      this.mostrarLogin = true;
    }
  }
}
