import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import * as AuthActions from './auth.actions';
import * as SettingsActions from '../settings/settings.actions';
import { AuthApiService } from '../../api/auth-api.service';
import { NotificationService } from '../../services/notification.service';
import { isApiResponse, toApiError } from '../../utils/api-response.utils';
import type { ApiResponse } from '../../../shared/models/api-response.model';
import type {
  AuthSession,
  AuthSessionResponse,
  UserProfile,
} from '../../auth/auth.models';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authApi = inject(AuthApiService);
  private notifications = inject(NotificationService);
  private router = inject(Router);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequested),
      switchMap(({ payload }) =>
        this.authApi.login(payload).pipe(
          switchMap((response: ApiResponse<AuthSessionResponse>) => {
            if (!response.success || !response.data) {
              const error = toApiError(response, response.result);
              return of(
                AuthActions.loginFailure({ error }),
                SettingsActions.setTheme({
                  mode: 'light',
                }),
              );
            }
            const prefersDarkMode =
              response.data.profile?.prefers_dark_mode ?? false;
            const isSuperUser = response.data.user.super_user ?? false;
            const role: UserProfile['role'] = isSuperUser
              ? 'superuser'
              : 'user';
            const user: UserProfile = {
              id: response.data.user.id,
              name: response.data.user.username,
              email: response.data.user.email,
              role,
              prefersDarkMode,
              isSuperUser,
            };
            const session: AuthSession = {
              accessToken: response.data.access_token ?? '',
              user,
            };
            this.notifications.success(
              'Bienvenido/a',
              'Acceso concedido correctamente.',
            );
            return of(
              AuthActions.loginSuccess({ session }),
              SettingsActions.setTheme({
                mode: prefersDarkMode ? 'dark' : 'light',
              }),
            );
          }),
          catchError((error: HttpErrorResponse) => {
            const parsed = isApiResponse(error.error)
              ? toApiError(error.error, error.status)
              : toApiError(null, error.status || 0);
            this.notifications.error('Acceso denegado', parsed.message);
            return of(AuthActions.loginFailure({ error: parsed }));
          }),
        ),
      ),
    ),
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          void this.router.navigate(['/app']);
        }),
      ),
    { dispatch: false },
  );
}
