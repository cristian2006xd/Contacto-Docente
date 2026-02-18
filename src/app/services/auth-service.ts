import { Injectable } from '@angular/core';
import { getAuth, User, signInWithEmailAndPassword, signOut} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  usuario: User | null = null;

  private auth = getAuth();

  login(email:string, password:string){
    signInWithEmailAndPassword(this.auth,email, password)
    .then(respuesta => this.usuario=respuesta.user)
    .catch(err => console.error('No puede iniciar sesión', err.message))
  }

  logout(){
    signOut(this.auth);
    this.usuario = null;
  }
  
}
