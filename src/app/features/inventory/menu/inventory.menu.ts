import type { MenuItemDefinition } from '../../../core/layout/module.models';

export const inventoryMenu: MenuItemDefinition[] = [
  {
    label: 'Dashboard',
    icon: 'pi-chart-line',
    route: '/app/inventory',
  },
  {
    label: 'Stock',
    icon: 'pi-box',
    route: '/app/inventory/stock',
  },
  {
    label: 'Movimientos',
    icon: 'pi-sync',
    route: '/app/inventory/movements',
  },
];
