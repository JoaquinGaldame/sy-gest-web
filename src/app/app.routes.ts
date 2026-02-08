import { Routes } from '@angular/router';
import { DashboardShellComponent } from './core/layout/components/dashboard-shell.component';
import { AuthGuard } from './core/guards/auth.guard';
import { SuperUserGuard } from './core/guards/super-user.guard';
import { SettingsPageComponent } from './core/layout/pages/settings-page.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/public/public.routes').then(
        (module) => module.PUBLIC_ROUTES,
      ),
  },
  {
    path: 'app',
    component: DashboardShellComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inventory' },
      {
        path: 'inventory',
        loadChildren: () =>
          import('./features/inventory/inventory.routes').then(
            (module) => module.INVENTORY_ROUTES,
          ),
      },
      {
        path: 'hr',
        loadChildren: () =>
          import('./features/hr/hr.routes').then((module) => module.HR_ROUTES),
      },
      {
        path: 'finance',
        loadChildren: () =>
          import('./features/finance/finance.routes').then(
            (module) => module.FINANCE_ROUTES,
          ),
      },
      {
        path: 'system-admin',
        canActivate: [SuperUserGuard],
        loadChildren: () =>
          import('./features/system-admin/system-admin.routes').then(
            (module) => module.SYSTEM_ADMIN_ROUTES,
          ),
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
      },
      { path: '**', redirectTo: 'inventory' },
    ],
  },
  { path: '**', redirectTo: '' },
];
