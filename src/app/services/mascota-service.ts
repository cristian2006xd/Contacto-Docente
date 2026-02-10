import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/pet';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {

  private http = inject(HttpClient);

  private API_PET = 'https://www.mockdog.dev/api/dogs'

  //Método para leer los datos de la API
  getMascotas():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.API_PET)
  }
  
}
