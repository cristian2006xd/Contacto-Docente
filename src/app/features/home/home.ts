import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Blog } from '../../shared/blog/blog';
import { Servicio } from '../../shared/servicio/servicio';
import { Pacientes } from "../../shared/pacientes/pacientes";

@Component({
  selector: 'app-home',
  imports: [Hero, Blog, Servicio, Pacientes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
