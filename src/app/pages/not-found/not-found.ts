import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="d-flex align-items-center justify-content-center min-vh-100 bg-dark text-white text-center px-4">
      <div class="card bg-secondary bg-opacity-10 border-warning border-opacity-25 p-5 rounded-4 shadow-lg" style="max-width: 600px; backdrop-filter: blur(10px);">

        <h1 class="display-1 fw-bold text-warning mb-0">404</h1>
        <div class="mb-4">
          <i class="bi bi-exclamation-triangle text-warning" style="font-size: 3rem;"></i>
        </div>

        <h2 class="text-uppercase fw-bold mb-3">¡Página no encontrada, Nakama!</h2>
        <p class="lead mb-5 text-secondary">
          Parece que te has perdido en el Grand Line o un Genjutsu te está engañando. Esta página no existe en nuestra tienda.
        </p>

        <a routerLink="/inicio" class="btn btn-warning rounded-pill px-5 py-3 fw-bold shadow text-dark text-uppercase">
          <i class="bi bi-house-door-fill me-2"></i>Volver a la Base
        </a>
      </div>
    </main>
  `,
  styles: [`
    h1 {
      text-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
    }
  `]
})
export class NotFoundComponent {}
