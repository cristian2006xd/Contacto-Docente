import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  private router = inject(Router);
  cerrarSesion() {
    if (confirm('¿Estás seguro de que deseas salir del sistema? 🐾')) {
      this.router.navigate(['/login']); 
    }
  }

}
