import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private http = inject(HttpClient);

  private API_URL = 'https://app-crude-d4949-default-rtdb.firebaseio.com';

  /*Método Get
    getUsuarios():Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.API_URL);
  }*/

  //Método Get
    getUsuarios():Observable<Usuario[]>{
      return this.http.get<{[key: string]: Usuario}>(`${this.API_URL}/usuarios.json`).pipe(
        map(respuesta => {
          if(!respuesta){
            return [];
          }
          return Object.keys(respuesta).map(id => {
            const usuarioConId = { ...respuesta[id], id:id};
            return usuarioConId;
          });
        })
      )
  }

    //Método Post
    postUsuario(usuario:Usuario):Observable<Usuario>{
      return this.http.post<Usuario>(`${this.API_URL}/usuarios.json`, usuario);
    }

    //Método buscarPorId
    getUsuarioById(id:string):Observable<Usuario>{
      return this.http.get<Usuario>(`${this.API_URL}/usuarios/${id}.json`);
    }

    //Método Put
    putUsuario(id:string, usuario:Usuario):Observable<Usuario>{
      return this.http.put<Usuario>(`${this.API_URL}/usuarios/${id}.json`, usuario);
    }

    //Método delete
    deleteUsuario(id:string):Observable<void>{
      return this.http.delete<void>(`${this.API_URL}/usuarios/${id}.json`);
    }
  
}
