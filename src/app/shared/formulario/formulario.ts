import { Component, inject, signal, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { Salir } from '../../guards/outh-guard';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario implements OnInit, Salir {

  private servicioUsuario = inject(UsuarioService);

  public servicioAuth = inject(AuthService);

  //CAMBIO CANDEACTIVATE
  private router = inject(Router);

  listaUsuarios = signal<Usuario[]>([]);

  editando = false;

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rol: 'EMPLEADO'
  };

  ngOnInit() {
    this.obtenerUsuarios();
  }

  //Método obtenerUsuarios
  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(usuarios => {
      this.listaUsuarios.set(usuarios);
    })
  }

  finalizarYSalir() {
    this.obtenerUsuarios();
    this.resetear();
    this.router.navigate(['/'])
  }

  permitirSalir(): boolean {
    const datosIntroducidos =
      (this.nuevoUsuario.name?.trim() ?? '') !== '' ||
      (this.nuevoUsuario.email?.trim() ?? '') !== '' ||
      (this.nuevoUsuario.name?.trim() ?? '') !== '';

    if (this.editando || datosIntroducidos) {
      return confirm('Tienes datos sin guardar en el formulario. ¿Deseas salir de todas formas?')
    }
    return true;
  }

  //Método guardar
  guardarUsuario() {
    const accion = this.editando ? 'Actualizar' : 'Registrar';
    if (confirm(`Estas seguro de que deseas ${accion} a este usuario`)) {

      if (this.editando && this.nuevoUsuario.id) {
        this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
          this.obtenerUsuarios();
          this.resetear();
        });
      }
      else {
        this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
          this.obtenerUsuarios();
          this.resetear();
        });
      }
    }
  }

  //Método eliminar
  eliminarUsuario(id: string) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.obtenerUsuarios;
      });
    }
  }

  //Método para poner los datos seleccionados en el formulario
  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  //Método para limpiar el formulario
  resetear() {
    this.editando = false;
    this.nuevoUsuario = { name: '', email: '', phone: '', password: '', rol: 'EMPLEADO' }
  }
}

/*Guardar Usuario
  guardarUsuario() {
    this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(usuarioId => {
      //... Spread Operator: combina el nuevo usuario con la listaUsuarios
      this.listaUsuarios.set([usuarioId, ...this.listaUsuarios()]);
      //Limpiar el form
      this.nuevoUsuario = { name: '', email: '', phone: '' };
    })
  }*/
