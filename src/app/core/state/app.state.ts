import type { AuthState } from './auth/auth.state';
import type { SettingsState } from './settings/settings.state';

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
}
