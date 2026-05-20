import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Tareas } from './pages/tareas/tareas';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: Inicio
  },
  {
    path: 'tareas',
    component: Tareas
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
