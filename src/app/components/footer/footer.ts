import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // <-- Importa esto

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive], // <-- Y añádelo aquí
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent { }
