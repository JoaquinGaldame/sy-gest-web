import { createReducer, on } from '@ngrx/store';
import { initialSettingsState } from './settings.state';
import * as SettingsActions from './settings.actions';

export const settingsFeatureKey = 'settings';

export const settingsReducer = createReducer(
  initialSettingsState,
  on(SettingsActions.setTheme, (state, { mode }) => ({
    ...state,
    themeMode: mode,
  })),
  on(SettingsActions.setActiveModule, (state, { moduleId }) => ({
    ...state,
    activeModuleId: moduleId,
  })),
);
