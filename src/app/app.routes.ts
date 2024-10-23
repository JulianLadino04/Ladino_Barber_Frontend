import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReservaCitaComponent } from './componentes/reserva-cita/reserva-cita.component';
import { VistaComponent } from './componentes/vista-citas/vista-citas.component';
import { EditarCitaComponent } from './componentes/editar-cita/editar-cita.component';

export const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige la raíz a /login
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
   { path: 'reserva-cita', component: ReservaCitaComponent },
   { path: 'vista-citas', component: VistaComponent },
   { path: 'editar-cita', component: EditarCitaComponent },
   { path: '**', redirectTo: '/login' } // Redirige cualquier ruta desconocida a /login
];
