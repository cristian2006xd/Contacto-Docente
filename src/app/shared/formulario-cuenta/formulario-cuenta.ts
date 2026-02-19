import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-formulario-cuenta',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cuenta.html',
  styleUrl: './formulario-cuenta.css',
})
export class FormularioCuenta {

  private fb = inject(FormBuilder);

  reglaEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  //reglaPassword = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$';

  formCuenta = this.fb.group(
    {
      email: ['', [Validators.required, Validators.pattern(this.reglaEmail)]],
      comentario: ['', [Validators.required]]
      //password: ['', [Validators.required, Validators.pattern(this.reglaPassword)]],
      //repeatPassword: ['', [Validators.required]]
    }
  );

  //Método para la validacion
  validarClaves(control: AbstractControl): ValidationErrors | null {
    const clave1 = control.get('password')?.value;
    const clave2 = control.get('repeatPassword')?.value;

    return clave1 === clave2 ? null : { noCoinciden: true };
  }

  //Método para mostrar los errores personalizados
  mostrarError(campo: string, tipoError: string): boolean {
    const input = this.formCuenta.get(campo);

    if (input && input.invalid && input.touched) {
      return input.hasError(tipoError);
    }
    return false;
  }

  enviarRegistro() {
    if (this.formCuenta.valid) {
      //URLSearchParams crea un objeto especial que formatea los datos del formulario como un url (email%juanito@gmail.com...)
      const contenido = new URLSearchParams();
      contenido.set('form-name', 'contacto');
      contenido.set('email', this.formCuenta.value.email ?? '');
      contenido.set('comentario', this.formCuenta.value.comentario ?? '');

      //Promesa: Funcion especial de JS que se usa para hacer peticiones http a traves de la red
      fetch('/', {
        method: 'POST',
        //Indicar los datos que se van a enviar esta codificados como una URL no como un JSON
        headers: { 'Content-Type': "application/x-www-form-urlencoded" },
        //Convertir todo el objeto a una cadena de texto lista para enviarse 
        body: contenido.toString()
      })
        //Si la promesa se cumple 
        .then(() => {
          alert("Enviado con éxito");
          this.formCuenta.reset();
        })
        //Si la promesa no se cumple 
        .catch((error) => 
          alert("No se pueden enviar los datos" + error));
    }
  }
}

