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
    title: 'Catálogo de Figuras',
    loadComponent: () => import('./pages/catalogo/catalogo').then((m) => m.Catalogo),
  },
  {
    path: 'carrito-pago',
    title: 'Finalizar Pedido',
    loadComponent: () => import('./pages/carrito-pago/carrito-pago').then((m) => m.CarritoPago),
  },
  {
    path: 'login',
    title: 'Acceder - Friki Store',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'signin',
    title: 'Registro - Friki Store',
    loadComponent: () => import('./pages/signin/signin').then((m) => m.SigninComponent),
  },
  {
    path: 'about-us',
    title: 'Sobre Nosotros',
    loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'accesorios',
    title: 'Accesorios Especiales',
    loadComponent: () =>
      import('./pages/producto-detalle/producto-detalle').then((m) => m.ProductoDetalle),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
