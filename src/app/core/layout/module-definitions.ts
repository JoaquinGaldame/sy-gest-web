import type { MenuItemDefinition, ModuleDefinition } from './module.models';
import { inventoryMenu } from '../../features/inventory/menu/inventory.menu';
import { hrMenu } from '../../features/hr/menu/hr.menu';
import { financeMenu } from '../../features/finance/menu/finance.menu';
import { systemAdminMenu } from '../../features/system-admin/menu/system-admin.menu';

export const MODULES: ModuleDefinition[] = [
  {
    id: 'inventory',
    label: 'Inventory',
    route: '/app/inventory',
    menu: inventoryMenu,
  },
  {
    id: 'hr',
    label: 'HR',
    route: '/app/hr',
    menu: hrMenu,
  },
  {
    id: 'finance',
    label: 'Finance',
    route: '/app/finance',
    menu: financeMenu,
  },
  {
    id: 'system-admin',
    label: 'System Admin',
    route: '/app/system-admin',
    menu: systemAdminMenu,
    requiresSuperUser: true,
  },
];

export const getModuleById = (id: string): ModuleDefinition | undefined =>
  MODULES.find((module) => module.id === id);

export const withSettings = (
  items: MenuItemDefinition[],
): MenuItemDefinition[] => [
  ...items,
  {
    label: 'Settings',
    icon: 'pi-cog',
    route: '/app/settings',
  },
];
