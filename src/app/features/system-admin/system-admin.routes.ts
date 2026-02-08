import { Routes } from '@angular/router';
import { SystemAdminDashboardPage } from './pages/system-admin-dashboard.page';
import { SystemAdminUsersPage } from './pages/system-admin-users.page';
import { SystemAdminAuditPage } from './pages/system-admin-audit.page';

export const SYSTEM_ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: SystemAdminDashboardPage,
  },
  {
    path: 'users',
    component: SystemAdminUsersPage,
  },
  {
    path: 'audit',
    component: SystemAdminAuditPage,
  },
];
