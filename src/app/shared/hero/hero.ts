import { Component, Input } from '@angular/core';
import { Blog } from '../blog/blog';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  //Los datos vacios que llenaremos en cada uso del componente
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() descripcion!: string;
  @Input() imagen!: string;
  @Input() item1!: string;
  @Input() item2!: string;
  @Input() enano!: string;
  @Input() enano2!: string;

}
