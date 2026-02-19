import { CanDeactivateFn } from '@angular/router';
export interface Salir {
  permitirSalir:() => boolean;
}

export const outhGuardGuard: CanDeactivateFn<Salir> = (component) => {
  return component.permitirSalir ? component.permitirSalir() : true;
};
