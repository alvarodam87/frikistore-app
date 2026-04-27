import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer', // Este es el nombre que usas en el HTML
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  // Lógica para el footer
}
=======
import { RouterLink, RouterLinkActive } from '@angular/router'; // <-- Importa esto

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent { }
>>>>>>> 9a272943378bccd2afea2a009dced59408403828
