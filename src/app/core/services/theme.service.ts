import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs/operators';
import { selectThemeMode } from '../state/settings/settings.selectors';
import type { ThemeMode } from '../state/settings/settings.state';
import * as SettingsActions from '../state/settings/settings.actions';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'sy-gest-theme';
  private document = inject(DOCUMENT);
  private store = inject(Store);

  init(): void {
    const stored = this.getStoredTheme();
    if (stored) {
      this.applyTheme(stored);
      this.store.dispatch(SettingsActions.setTheme({ mode: stored }));
    }
    this.store
      .select(selectThemeMode)
      .pipe(distinctUntilChanged())
      .subscribe((mode) => this.applyTheme(mode));
  }

  applyTheme(mode: ThemeMode): void {
    const root = this.document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    this.storeTheme(mode);
  }

  private getStoredTheme(): ThemeMode | null {
    const value = localStorage.getItem(this.storageKey);
    if (value === 'dark' || value === 'light') {
      return value;
    }
    return null;
  }

  private storeTheme(mode: ThemeMode): void {
    localStorage.setItem(this.storageKey, mode);
  }
}
