import type { MenuItemDefinition } from '../../../core/layout/module.models';

export const financeMenu: MenuItemDefinition[] = [
  {
    label: 'Dashboard',
    icon: 'pi-briefcase',
    route: '/app/finance',
  },
  {
    label: 'Ingresos',
    icon: 'pi-arrow-up-right',
    route: '/app/finance/income',
  },
  {
    label: 'Gastos',
    icon: 'pi-arrow-down-left',
    route: '/app/finance/expenses',
  },
];
