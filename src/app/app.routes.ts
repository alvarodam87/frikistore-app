import { Routes } from '@angular/router';

// Los que hizo Álvaro (ajustados al nombre exacto de la clase)
import { Inicio } from './pages/inicio/inicio';
import { Catalogo } from './pages/catalogo/catalogo';
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';
import { CarritoPago } from './pages/carrito-pago/carrito-pago';
import { AboutUs } from './pages/about-us/about-us';

// Los que hicimos nosotros (esos sí tenían "Component" en el nombre)
import { ContactoComponent } from './pages/contacto/contacto';
import { SigninComponent } from './pages/signin/signin';

export const routes: Routes = [
  // Rutas de Álvaro (Ajustadas)
  { path: '',
    component: Inicio
  },
  { path: 'catalogo',
    component: Catalogo
  },
  { path: 'producto/:id',
    component: ProductoDetalle
  },
  { path: 'carrito',
    component: CarritoPago
  },
  { path: 'about-us',
    component: AboutUs
  },

  // Tus rutas
  { path: 'login',
    component: SigninComponent
  },
  { path: 'registro',
    component: SigninComponent
  },
  { path: 'contacto',
    component: ContactoComponent
  },

  // Ruta por defecto
  { path: '**'
    , redirectTo: 'login'
    , pathMatch: 'full' }
];
