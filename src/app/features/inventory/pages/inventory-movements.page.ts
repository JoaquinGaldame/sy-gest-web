import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-inventory-movements-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">
          Movimientos de Inventario
        </h1>
        <p class="mt-2 text-sm text-muted">Entradas y salidas en proceso.</p>
      </header>
      <app-coming-soon title="Movimientos de Inventario"></app-coming-soon>
    </div>
  `,
})
export class InventoryMovementsPage {}
