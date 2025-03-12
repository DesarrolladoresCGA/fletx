import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RickAndMortyServiceService } from '../services/rick-and-morty-service.service';

export const verificarGuard: CanActivateFn = async (route, state) => {
  let idPersonaje = route.params['id'];

  const api = inject(RickAndMortyServiceService);
  const router = inject(Router);

  // Si no hay ID, redirigir a 'home'
  if (!idPersonaje) {
    await router.navigate(['']);
    return false;
  }

  try {
    let data = await api.traerPersonPorId(idPersonaje);

    // Permitir acceso
    return true;

  } catch (error) {
    await router.navigate(['']);
    return false;
  }
};
