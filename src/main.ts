import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Ruta corregida según tu estructura
import { AppComponent } from './app/app'; // Ruta corregida según tu estructura

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
