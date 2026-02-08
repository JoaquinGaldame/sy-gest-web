import type { ApiError } from '../../../shared/models/api-response.model';
import type { UserProfile } from '../../auth/auth.models';

export interface AuthState {
  token: string | null;
  user: UserProfile | null;
  loading: boolean;
  error: ApiError | null;
}

export const initialAuthState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};
