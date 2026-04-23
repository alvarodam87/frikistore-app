import 'zone.js'
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

// Importamos 'App' con la primera letra en Mayúscula
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
