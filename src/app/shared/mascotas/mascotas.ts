import { Component, inject, signal } from '@angular/core';
import { MascotaService } from '../../services/mascota-service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-mascotas',
  imports: [],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {

  private mascotaServicio = inject(MascotaService);

  mascotas = signal<Pet[]>([]);

  ngOnInit() {
    this.mascotaServicio.getMascotas().subscribe(datos => {
      this.mascotas.set(datos.data);
    });
  }

  adoptar() {
    const mensajes = [
      "¡Guau! Gracias por elegirme, ¡seremos mejores amigos! 🐾",
      "¡Miau! Prometo darte muchos ronroneos a cambio de este hogar. 🐱",
      "¡Gracias por darme una segunda oportunidad! No te fallaré. ❤️",
      "¡Mi colita no deja de moverse! Gracias por adoptarme. 🐶"
    ];

    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    
    alert(mensajeAleatorio);
  }

}
