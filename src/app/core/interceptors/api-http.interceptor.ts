import { Injectable, inject } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAuthToken } from '../state/auth/auth.selectors';
import { NotificationService } from '../services/notification.service';
import { isApiResponse, toApiError } from '../utils/api-response.utils';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  private store = inject(Store);
  private notifications = inject(NotificationService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return this.store.select(selectAuthToken).pipe(
      take(1),
      switchMap((token) => {
        const authRequest = token
          ? request.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
              },
            })
          : request;
        return next.handle(authRequest).pipe(
          catchError((error: HttpErrorResponse) => {
            const apiError = isApiResponse(error.error)
              ? toApiError(error.error, error.status)
              : toApiError(null, error.status || 0);
            if (error.status === 0 || error.status >= 500) {
              this.notifications.error('Error del servidor', apiError.message);
            }
            return throwError(() => apiError);
          }),
        );
      }),
    );
  }
}
