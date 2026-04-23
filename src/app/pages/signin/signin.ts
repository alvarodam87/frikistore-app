import {FormsModule} from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,FormsModule,NgOptimizedImage],
  templateUrl: './signin.html',
})
export class SigninComponent {
  isLogin = true; // Controla qué pestaña se ve
  btnText = 'ENTRAR';
  btnClass = 'btn-warning';

  switchTab(toLogin: boolean) {
    this.isLogin = toLogin;
    this.resetBtn();
  }

  procesarFormulario(tipo: string) {
    if (tipo === 'login') {
      this.btnText = '<i class="bi bi-hourglass-split me-2"></i>Cargando...';
      setTimeout(() => {
        // En un futuro aquí el Router redireccionará a Inicio
        this.resetBtn();
        alert('¡Login simulado exitoso!');
      }, 1000);
    } else {
      this.btnText = '<i class="bi bi-check-circle me-2"></i>¡Cuenta Creada!';
      this.btnClass = 'btn-success';
      setTimeout(() => {
        this.switchTab(true); // Cambia automáticamente a la pestaña de login
      }, 1500);
    }
  }

  resetBtn() {
    this.btnText = this.isLogin ? 'ENTRAR' : 'CREAR CUENTA';
    this.btnClass = 'btn-warning';
  }
}
