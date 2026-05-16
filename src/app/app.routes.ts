import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';

export const routes: Routes = [
  {
    path: '',
    component: Inicio,
    title: 'FrikiStore - Inicio',
  },
  {
    path: 'inicio',
    component: Inicio,
    title: 'FrikiStore - Inicio',
  },
  {
    path: 'catalogo',
    title: 'Catálogo de Figuras',
    loadComponent: () => import('./pages/catalogo/catalogo').then((m) => m.Catalogo),
  },
  // PASO 7.1: RUTA DINÁMICA (Obligatorio para el "Ver más")
  {
    path: 'producto/:id',
    title: 'Detalle del Producto',
    loadComponent: () => import('./pages/producto-detalle/producto-detalle').then((m) => m.ProductoDetalle),
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
    path: 'registro', // Cambiado de 'signin' a 'registro' para cumplir independencia
    title: 'Registro - Friki Store',
    loadComponent: () => import('./pages/registro/registro').then((m) => m.Registro),
  },
  {
    path: 'about-us',
    title: 'Sobre Nosotros',
    loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'accesorios',
    title: 'Accesorios Especiales',
    // ESTO ES LO QUE TIENES QUE CAMBIAR 👇
    loadComponent: () => import('./pages/accesorios/accesorios').then((m) => m.Accesorios),
  },
  // PASO 7.2: COMPONENTE 404 (En lugar del redirectTo)
  {
    path: '**',
    title: '404 - No Encontrado',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFoundComponent),
  },
];
