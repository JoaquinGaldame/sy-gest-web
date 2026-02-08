import type { MenuItemDefinition } from '../../../core/layout/module.models';

export const systemAdminMenu: MenuItemDefinition[] = [
  {
    label: 'Control Center',
    icon: 'pi-shield',
    route: '/app/system-admin',
  },
  {
    label: 'Usuarios',
    icon: 'pi-user-edit',
    route: '/app/system-admin/users',
  },
  {
    label: 'Auditoría',
    icon: 'pi-history',
    route: '/app/system-admin/audit',
  },
];
