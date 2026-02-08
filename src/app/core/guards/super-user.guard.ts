import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { selectAuthUser } from '../state/auth/auth.selectors';

@Injectable({ providedIn: 'root' })
export class SuperUserGuard implements CanActivate {
  private store = inject(Store);
  private router = inject(Router);

  canActivate() {
    return this.store.select(selectAuthUser).pipe(
      take(1),
      map((user) => {
        if (user?.role === 'superuser' || user?.isSuperUser) {
          return true;
        }
        this.router.navigate(['/app']);
        return false;
      }),
    );
  }
}
