import { createFeatureSelector, createSelector } from '@ngrx/store';
import type { AuthState } from './auth.state';
import { authFeatureKey } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthToken = createSelector(
  selectAuthState,
  (state) => state.token,
);

export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.user,
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading,
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error,
);
