<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
=======
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // <-- Importa esto
>>>>>>> 9a272943378bccd2afea2a009dced59408403828

@Component({
  selector: 'app-navbar',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  public cartService = inject(CartService); // Debe ser public
}
=======
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent { }
>>>>>>> 9a272943378bccd2afea2a009dced59408403828
