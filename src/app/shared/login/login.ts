import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';

  private servicioAuth = inject(AuthService);

  private router = inject(Router);

  iniciarSesion() {
    this.servicioAuth.login(this.email, this.password).subscribe(success => {
      if (success) {
        alert('Bienvenidos al sistema');
        this.router.navigate(['/usuarios']);
      } else {
        alert('Error: usuario no autenticado')
      }
    })
  }

  cerrarSesion() {
    this.servicioAuth.logout();
    alert('Sesión cerrada exitosamente')
  }

}
