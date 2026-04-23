import { Routes } from '@angular/router';

// COMPONENTES
import { Inicio } from './components/inicio/inicio';
import { Catalogo } from './components/catalogo/catalogo';
import { AboutUs } from './components/about-us/about-us';

// PAGES (Asegúrate de que las rutas a las carpetas sean exactas)
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';
import { CarritoPago } from './pages/carrito-pago/carrito-pago';
import { Contacto } from './pages/contacto/contacto';
import { SigninComponent } from './pages/signin/signin';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'catalogo', component: Catalogo },
  { path: 'about-us', component: AboutUs },
  // Usamos ProductoDetalle para la sección de accesorios como pediste
  { path: 'accesorios', component: ProductoDetalle },
  { path: 'producto/:id', component: ProductoDetalle },
  { path: 'carrito', component: CarritoPago },
  { path: 'login', component: SigninComponent },
  { path: 'registro', component: SigninComponent },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: 'inicio' }
];
