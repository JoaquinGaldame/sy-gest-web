import { Routes } from '@angular/router';
import { InventoryDashboardPage } from './pages/inventory-dashboard.page';
import { InventoryStockPage } from './pages/inventory-stock.page';
import { InventoryMovementsPage } from './pages/inventory-movements.page';

export const INVENTORY_ROUTES: Routes = [
  {
    path: '',
    component: InventoryDashboardPage,
  },
  {
    path: 'stock',
    component: InventoryStockPage,
  },
  {
    path: 'movements',
    component: InventoryMovementsPage,
  },
];
