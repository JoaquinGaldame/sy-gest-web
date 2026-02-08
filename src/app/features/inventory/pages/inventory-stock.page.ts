import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-inventory-stock-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">Stock</h1>
        <p class="mt-2 text-sm text-muted">Seguimiento de stock disponible.</p>
      </header>
      <app-coming-soon title="Stock"></app-coming-soon>
    </div>
  `,
})
export class InventoryStockPage {}
