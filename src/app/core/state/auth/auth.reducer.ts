import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginRequested, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { session }) => ({
    ...state,
    loading: false,
    token: session.accessToken,
    user: session.user,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AuthActions.logout, () => initialAuthState),
);
