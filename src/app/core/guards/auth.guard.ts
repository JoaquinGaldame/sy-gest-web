import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { selectAuthToken } from '../state/auth/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private store = inject(Store);
  private router = inject(Router);

  canActivate() {
    return this.store.select(selectAuthToken).pipe(
      take(1),
      map((token) => {
        if (token) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      }),
    );
  }
}
