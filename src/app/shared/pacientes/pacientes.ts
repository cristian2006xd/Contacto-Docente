import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  imports: [FormsModule, CommonModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css',
})
export class Pacientes {

  nombreFiltro:string='';

  pacientes = [
    {nombre: 'Ramón', especie: 'Perro', urgencia: 'alta', recuperacion: 85},
    {nombre: 'Blacky', especie: 'Gato', urgencia: 'baja', recuperacion: 30},
    {nombre: 'Kike', especie: 'Conejo', urgencia: 'media', recuperacion: 50}
  ];

}
