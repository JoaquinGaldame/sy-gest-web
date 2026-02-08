import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { PopoverModule } from 'primeng/popover';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { combineLatest, filter, map } from 'rxjs';
import { MODULES, withSettings } from '../module-definitions';
import { selectAuthUser } from '../../state/auth/auth.selectors';
import { selectActiveModuleId } from '../../state/settings/settings.selectors';
import * as SettingsActions from '../../state/settings/settings.actions';
import * as AuthActions from '../../state/auth/auth.actions';

@Component({
  selector: 'app-dashboard-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ButtonModule,
    DrawerModule,
    PopoverModule,
    SelectModule,
    ToggleSwitchModule,
  ],
  template: `
    <div class="min-h-screen bg-background text-foreground">
      <header
        class="flex h-14 items-center justify-between border-b border-slate-200/60 bg-white/90 px-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/90"
      >
        <div class="flex items-center gap-3">
          <button
            pButton
            type="button"
            icon="pi pi-bars"
            label="Menú"
            class="p-button-text"
            (click)="toggleDrawer()"
          >
            <span class="sr-only">Menú</span>
          </button>
          <div class="hidden items-center gap-2 md:flex">
            <img
              src="assets/logos/sy-gest-logo-embedded-cropped.svg"
              alt="SyGest"
              class="h-9 w-auto"
            />
            <span class="font-display text-sm font-semibold">SyGest</span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button
            pButton
            type="button"
            icon="pi pi-user"
            class="p-button-rounded p-button-text"
            (click)="userMenu.toggle($event)"
          >
            <span class="sr-only">Usuario</span>
          </button>
          <p-popover #userMenu>
            <ng-template pTemplate="content">
              <div class="flex w-44 flex-col gap-2 p-1">
                <button
                  pButton
                  type="button"
                  class="p-button-text w-full justify-start"
                  (click)="goToAccount()"
                >
                  Mi cuenta
                </button>
                <button
                  pButton
                  type="button"
                  class="p-button-text w-full justify-start"
                  (click)="logout()"
                >
                  Cerrar sesión
                </button>
              </div>
            </ng-template>
          </p-popover>
        </div>
      </header>

      <div class="flex min-h-[calc(100vh-56px)]">
        <aside
          *ngIf="isPinned"
          class="flex w-72 flex-col gap-6 border-r border-slate-200/70 bg-white/95 px-5 py-6 dark:border-slate-700/60 dark:bg-slate-900/85"
        >
          <ng-container [ngTemplateOutlet]="menuTemplate"></ng-container>
        </aside>

        <main class="flex-1 px-8 py-10">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>

    <p-drawer
      [(visible)]="drawerOpen"
      position="left"
      [modal]="true"
      [dismissible]="true"
      [closable]="false"
      [style]="{ width: '300px' }"
    >
      <ng-template pTemplate="headless" let-closeFn="closeFn">
        <div
          class="flex h-full flex-col gap-6 border-r border-slate-200/70 bg-white/95 px-5 py-6 dark:border-slate-700/60 dark:bg-slate-900/90"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <img
                src="assets/logos/sy-gest-logo-embedded-cropped.svg"
                alt="SyGest"
                class="h-9 w-auto"
              />
              <span class="font-display text-sm font-semibold">SyGest</span>
            </div>
            <button
              pButton
              type="button"
              icon="pi pi-times"
              class="p-button-text p-button-rounded"
              (click)="closeDrawer()"
            >
              <span class="sr-only">Cerrar</span>
            </button>
          </div>

          <div
            class="flex items-center justify-between rounded-xl bg-slate-50/80 p-3"
          >
            <span
              class="text-xs font-semibold uppercase tracking-[0.16em] text-muted"
              >Fijar menú</span
            >
            <p-toggleswitch
              [ngModel]="isPinned"
              (ngModelChange)="setPinned($event)"
            ></p-toggleswitch>
          </div>

          <ng-container [ngTemplateOutlet]="menuTemplate"></ng-container>
        </div>
      </ng-template>
    </p-drawer>

    <ng-template #menuTemplate>
      <div>
        <p
          class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted"
        >
          Módulo activo
        </p>
        <p-select
          [options]="modules$ | async"
          optionLabel="label"
          optionValue="id"
          [(ngModel)]="selectedModuleId"
          (onChange)="onModuleChange($event.value)"
          placeholder="Selecciona un módulo"
          class="w-full"
        ></p-select>
      </div>

      <nav class="flex flex-col gap-2">
        <a
          *ngFor="let item of menuItems$ | async"
          [routerLink]="item.route"
          routerLinkActive="bg-slate-100 text-foreground"
          class="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted transition hover:bg-slate-100 hover:text-foreground dark:hover:bg-slate-800"
        >
          <i class="pi" [ngClass]="item.icon"></i>
          <span>{{ item.label }}</span>
        </a>
      </nav>
    </ng-template>
  `,
})
export class DashboardShellComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  selectedModuleId = 'inventory';
  drawerOpen = false;
  isPinned = false;
  modules$ = combineLatest([
    this.store.select(selectAuthUser),
    this.store.select(selectActiveModuleId),
  ]).pipe(
    map(([user, activeModuleId]) => {
      const allowed = MODULES.filter(
        (module) => !module.requiresSuperUser || user?.role === 'superuser',
      );
      this.selectedModuleId = activeModuleId;
      if (!allowed.find((m) => m.id === activeModuleId) && allowed.length > 0) {
        this.selectedModuleId = allowed[0].id;
      }
      return allowed;
    }),
  );

  menuItems$ = combineLatest([
    this.modules$,
    this.store.select(selectActiveModuleId),
  ]).pipe(
    map(([modules, activeModuleId]) => {
      const active = modules.find((module) => module.id === activeModuleId);
      return withSettings(active?.menu ?? []);
    }),
  );

  onModuleChange(moduleId: string) {
    this.store.dispatch(SettingsActions.setActiveModule({ moduleId }));
    const target = MODULES.find((module) => module.id === moduleId);
    if (target) {
      this.router.navigateByUrl(target.route);
    }
    this.drawerOpen = false;
  }

  ngOnInit() {
    this.syncModuleFromUrl(this.router.url);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) =>
        this.syncModuleFromUrl((event as NavigationEnd).urlAfterRedirects),
      );
  }

  private syncModuleFromUrl(url: string) {
    const match = MODULES.find((module) => url.startsWith(module.route));
    if (match) {
      this.store.dispatch(
        SettingsActions.setActiveModule({ moduleId: match.id }),
      );
    }
  }

  toggleDrawer() {
    if (!this.isPinned) {
      this.drawerOpen = !this.drawerOpen;
    }
  }

  closeDrawer() {
    this.drawerOpen = false;
  }

  setPinned(value: boolean) {
    this.isPinned = value;
    if (value) {
      this.drawerOpen = false;
    }
  }

  goToAccount() {
    void this.router.navigate(['/app/settings']);
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
    void this.router.navigate(['/login']);
  }
}
