import type { MenuItemDefinition } from '../../../core/layout/module.models';

export const hrMenu: MenuItemDefinition[] = [
  {
    label: 'Dashboard',
    icon: 'pi-users',
    route: '/app/hr',
  },
  {
    label: 'Colaboradores',
    icon: 'pi-id-card',
    route: '/app/hr/people',
  },
  {
    label: 'Nómina',
    icon: 'pi-wallet',
    route: '/app/hr/payroll',
  },
];
