import { Component } from '@angular/core';

@Component({
  selector: 'app-servicio',
  imports: [],
  templateUrl: './servicio.html',
  styleUrl: './servicio.css',
})
export class Servicio {

  subtitulo: string = "Cuidamos a los que más quieres con sevicios de calidad"

  servicioSeleccionado: string = "Ninguno";

  servicios = [
    {
      id: 1,
      nombre: "Consulta General",
      descripcion: "Evaluación completa de tu mascota",
      imagen: "https://escuelafarmacia.com/wp-content/uploads/cl%C3%ADnica-veterinaria.jpg",
      activo: true
    },
    {
      id: 2,
      nombre: "Cirujía",
      descripcion: "El cuidado de tu mascota con el mejor cirujano",
      imagen: "https://www.cimformacion.com/blog/wp-content/uploads/2020/07/veterinarios-triaje-perro-min.jpg",
      activo: true
    },
    {
      id: 3,
      nombre: "Estética",
      descripcion: "El cuidado de la imagen de tu mascota es primordial",
      imagen: "https://www.cimformacion.com/blog/wp-content/uploads/2020/09/peluquera-seca-perro.jpg",
      activo: false
    },
  ];

  //Variable para la busqueda
  serviciosFiltrados = this.servicios;

  //Funcion para mostrar el mensaje Has demostrado interes en:
  seleccionar(nombre: string) {
    this.servicioSeleccionado = nombre;
  }

  //Funcion para buscar servicios
  busqueda(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.subtitulo = `Resultados para: ${valor}`;

    this.serviciosFiltrados = this.servicios.filter(s => 
      s.nombre.toLowerCase().includes(valor.toLowerCase())
    )
  } 
}
