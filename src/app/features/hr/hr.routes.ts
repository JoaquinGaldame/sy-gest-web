import { Routes } from '@angular/router';
import { HrDashboardPage } from './pages/hr-dashboard.page';
import { HrPeoplePage } from './pages/hr-people.page';
import { HrPayrollPage } from './pages/hr-payroll.page';

export const HR_ROUTES: Routes = [
  {
    path: '',
    component: HrDashboardPage,
  },
  {
    path: 'people',
    component: HrPeoplePage,
  },
  {
    path: 'payroll',
    component: HrPayrollPage,
  },
];
