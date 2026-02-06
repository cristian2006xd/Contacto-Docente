import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  @Input() titulo: string = 'Nuestros Pacientes Felices';
  @Input() descripcion: string = 'Conoce a algunos de los pequeños valientes que han pasado por nuestra clínica.';

  @Input() subtitulo1: string = 'Golden Retriever';
  @Input() subtitulo11: string = 'Primera Vacunación';
  @Input() imagen1: string = 'https://www.catalunyaplants.com/wp-content/uploads/2015/01/golden-retriever.jpg';

  @Input() subtitulo2: string = 'Bulldog Francés';
  @Input() subtitulo22: string = 'Control de Crecimiento';
  @Input() imagen2: string = 'https://www.zooplus.es/magazine/wp-content/uploads/2019/06/franz%C3%B6sische-bulldogge.webp';

  @Input() subtitulo3: string = 'Beagle';
  @Input() subtitulo33: string = 'Desparasitación';
  @Input() imagen3: string = 'https://yumove.co.uk/cdn/shop/files/Beagle.jpg?v=1749573704';

  @Input() subtitulo4: string = 'Labrador Chocolate';
  @Input() subtitulo44: string = 'Chequeo General';
  @Input() imagen4: string = 'https://www.dogpackapp.com/blog/wp-content/uploads/2024/11/chocolate-labrador-retriever-standing-in-field.webp';
}

