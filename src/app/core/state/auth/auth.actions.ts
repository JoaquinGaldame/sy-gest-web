import { createAction, props } from '@ngrx/store';
import type { ApiError } from '../../../shared/models/api-response.model';
import type { AuthSession, LoginPayload } from '../../auth/auth.models';

export const loginRequested = createAction(
  '[Auth] Login Requested',
  props<{ payload: LoginPayload }>(),
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ session: AuthSession }>(),
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: ApiError }>(),
);

export const logout = createAction('[Auth] Logout');
