export interface MenuItemDefinition {
  label: string;
  route: string;
  icon?: string;
}

export interface ModuleDefinition {
  id: string;
  label: string;
  route: string;
  menu: MenuItemDefinition[];
  requiresSuperUser?: boolean;
}
