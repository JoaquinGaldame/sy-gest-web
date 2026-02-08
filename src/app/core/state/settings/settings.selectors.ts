import { createFeatureSelector, createSelector } from '@ngrx/store';
import type { SettingsState } from './settings.state';
import { settingsFeatureKey } from './settings.reducer';

export const selectSettingsState =
  createFeatureSelector<SettingsState>(settingsFeatureKey);

export const selectThemeMode = createSelector(
  selectSettingsState,
  (state) => state.themeMode,
);

export const selectActiveModuleId = createSelector(
  selectSettingsState,
  (state) => state.activeModuleId,
);
