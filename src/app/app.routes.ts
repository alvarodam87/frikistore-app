import { Routes } from '@angular/router';

// Importamos desde la carpeta 'pages' según tu estructura
import { Inicio } from './pages/inicio/inicio';

export const routes: Routes = [
  {
    path: '',
    component: Inicio,
    title: 'FrikiStore - Inicio',
  },
  {
    path: 'catalogo',
    // Usamos el catálogo que está en pages
    loadComponent: () => import('./pages/catalogo/catalogo').then((m) => m.Catalogo),
  },
  {
    path: 'carrito',
    loadComponent: () => import('./pages/carrito-pago/carrito-pago').then((m) => m.CarritoPago),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'accesorios', // Lo que aparece en la URL y en el routerLink
    loadComponent: () =>
      import('./pages/producto-detalle/producto-detalle').then((m) => m.ProductoDetalle),
  },
  { path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
