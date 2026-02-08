import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { authReducer } from './core/state/auth/auth.reducer';
import { settingsReducer } from './core/state/settings/settings.reducer';
import { AuthEffects } from './core/state/auth/auth.effects';
import { ApiHttpInterceptor } from './core/interceptors/api-http.interceptor';
import { environment } from '../environments/environment';
import { syGestPrimeTheme } from './core/theme/prime-theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: syGestPrimeTheme,
        options: {
          darkModeSelector: '.dark',
        },
      },
    }),
    provideStore({
      auth: authReducer,
      settings: settingsReducer,
    }),
    provideEffects([AuthEffects]),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    MessageService,
  ],
};
