export type ThemeMode = 'light' | 'dark';

export interface SettingsState {
  themeMode: ThemeMode;
  activeModuleId: string;
}

export const initialSettingsState: SettingsState = {
  themeMode: 'light',
  activeModuleId: 'inventory',
};
