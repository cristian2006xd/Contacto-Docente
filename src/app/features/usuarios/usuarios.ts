import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Formulario } from '../../shared/formulario/formulario';

@Component({
  selector: 'app-usuarios',
  imports: [Hero, Formulario],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

}
