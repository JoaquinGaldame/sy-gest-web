import { createAction, props } from '@ngrx/store';
import type { ThemeMode } from './settings.state';

export const setTheme = createAction(
  '[Settings] Set Theme',
  props<{ mode: ThemeMode }>(),
);

export const setActiveModule = createAction(
  '[Settings] Set Active Module',
  props<{ moduleId: string }>(),
);
