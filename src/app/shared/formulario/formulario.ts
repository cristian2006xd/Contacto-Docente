import { Component, inject, signal } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  private servicioUsuario = inject(UsuarioService);

  public servicioAuth = inject(AuthService);

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

  //Método guardar
  guardarUsuario() {
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
