import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormularioCuenta } from './shared/formulario-cuenta/formulario-cuenta';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'acerca', component: Acerca },
    { path: 'consultas', component: Consultas },
    { path: 'mascotas', component: Mascotas },
    { path: 'usuarios', component: Usuarios, canActivate: [authGuard] },
    { path: 'cuenta', component: FormularioCuenta },
    { path: 'login', component: Login }

];
