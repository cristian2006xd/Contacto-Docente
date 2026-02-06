import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  @Input() titulo!: string;
  @Input() titulo2!: string;
  @Input() subtitulo!: string;
  @Input() subtitulo2!: string;
  @Input() subtitulo3!: string;
  @Input() descripcion!: string;
  @Input() descripcion2!: string;
  @Input() descripcion3!: string;
  @Input() imagen!: string;
  @Input() imagen2!: string;
  @Input() imagen3!: string;
}
