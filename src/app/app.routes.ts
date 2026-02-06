import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';

export const routes: Routes = [
    //1. Ruta Inicial
    {path: '', component: Home},
    //2. Rutas de navegación
    {path: 'acerca', component: Acerca},
    {path: 'consultas', component: Consultas}
    //3. Redireccion si el usuario escribe una url que no existe
    //{path:'', component:Pagina404}
];
