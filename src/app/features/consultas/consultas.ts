import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { DetalleMascota } from "../../shared/detalle-mascota/detalle-mascota";
import { Hero } from '../../shared/hero/hero';
import { Portfolio } from "../../shared/portfolio/portfolio";

@Component({
  selector: 'app-consultas',
  imports: [DetalleMascota, Hero, Portfolio],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {

  mascotas = [
    {id:1, nombre:"Ramon", especie:"Perro", historial:"Vacunas al día"},
    {id:2, nombre:"Blacky", especie:"Gato", historial:"Requiere desparacitación"},
    {id:3, nombre:"Kike", especie:"Conejo", historial:"Requiere rehabilitación"}
  ];

  mascotaSeleccionada: Mascota | null = null;

  mensajeActivo: string = '';

  verDetalles(mascota:Mascota){
    this.mascotaSeleccionada=mascota;
  }

  //Recibe un mensaje del componente hijo
  //Gestiona el evento enviado desde el componente hijo
  procesarAviso(mensaje:string){
    this.mensajeActivo=mensaje;
  }

}
