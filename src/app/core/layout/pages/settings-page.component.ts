import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { selectThemeMode } from '../../state/settings/settings.selectors';
import * as SettingsActions from '../../state/settings/settings.actions';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ToggleSwitchModule, ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">Settings</h1>
        <p class="mt-2 text-sm text-muted">
          Configura preferencias de visualización y accesos globales.
        </p>
      </header>

      <section
        class="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-soft dark:border-slate-700/60 dark:bg-slate-900/60"
      >
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-[0.18em] text-muted"
            >
              Tema
            </p>
            <h2 class="mt-2 text-lg font-semibold text-foreground">
              Modo claro / oscuro
            </h2>
            <p class="mt-1 text-sm text-muted">
              El tema se sincroniza con el perfil al iniciar sesión.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-sm text-muted">Claro</span>
            <p-toggleswitch
              [ngModel]="themeMode === 'dark'"
              (ngModelChange)="toggleTheme($event)"
            ></p-toggleswitch>
            <span class="text-sm text-muted">Oscuro</span>
          </div>
        </div>
      </section>

      <app-coming-soon title="Preferencias avanzadas"></app-coming-soon>
    </div>
  `,
})
export class SettingsPageComponent {
  private store = inject(Store);
  themeMode$ = this.store.select(selectThemeMode);
  themeMode: 'light' | 'dark' = 'light';

  constructor() {
    this.themeMode$.subscribe((mode) => (this.themeMode = mode));
  }

  toggleTheme(isDark: boolean) {
    this.store.dispatch(
      SettingsActions.setTheme({ mode: isDark ? 'dark' : 'light' }),
    );
  }
}
