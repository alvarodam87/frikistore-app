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
    /* Si tus botones dicen routerLink="/carrito-pago", cambia el path a 'carrito-pago'.
       Si dicen "/carrito", déjalo como está.
    */
    path: 'carrito-pago',
    title: 'Finalizar Pedido',
    loadComponent: () => import('./pages/carrito-pago/carrito-pago').then((m) => m.CarritoPago),
  },
  {
    path: 'login',
    title: 'Acceder - Friki Store',
    // Asegúrate de importar el componente que tiene el estilo que expandimos (el de la carpeta pages)
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
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
