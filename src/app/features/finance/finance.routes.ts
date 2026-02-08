import { Routes } from '@angular/router';
import { FinanceDashboardPage } from './pages/finance-dashboard.page';
import { FinanceIncomePage } from './pages/finance-income.page';
import { FinanceExpensesPage } from './pages/finance-expenses.page';

export const FINANCE_ROUTES: Routes = [
  {
    path: '',
    component: FinanceDashboardPage,
  },
  {
    path: 'income',
    component: FinanceIncomePage,
  },
  {
    path: 'expenses',
    component: FinanceExpensesPage,
  },
];
