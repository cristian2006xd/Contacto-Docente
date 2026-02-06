import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  anio: number = new Date().getFullYear();

  enlaces = [
    {texto: 'Home', link: '#'},
    {texto: 'Acerca', link: '#'},
    {texto: 'Mascotas', link: '#'},
    {texto: 'Contacto', link: '#'},
    {texto: 'Registro', link: '#'}
  ];

}
