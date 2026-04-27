import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { NavbarComponent } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, Footer],
=======
import { NavbarComponent } from './components/navbar/navbar'; // Ajusta la ruta si es necesario
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent], // <-- Añade NavbarComponent y FooterComponent aquí
>>>>>>> 9a272943378bccd2afea2a009dced59408403828
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// ASEGÚRATE DE QUE AQUÍ DIGA "App" (Mayúscula)
export class App {
  title = 'FrikiStore';
}
