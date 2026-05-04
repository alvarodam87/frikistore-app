import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';

export const routes: Routes = [
  {
    path: '',
    component: Inicio,
    title: 'FrikiStore - Inicio',
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./pages/catalogo/catalogo').then((m) => m.Catalogo),
  },
  {
    path: 'carrito',
    loadComponent: () => import('./pages/carrito-pago/carrito-pago').then((m) => m.CarritoPago),
  },
  {
    path: 'login',
    // IMPORTANTE: Apuntamos a la carpeta components y al archivo login.ts
    loadComponent: () => import('./components/login/login').then((m) => m.Login),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'accesorios',
    loadComponent: () =>
      import('./pages/producto-detalle/producto-detalle').then((m) => m.ProductoDetalle),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
