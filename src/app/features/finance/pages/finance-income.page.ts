import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-finance-income-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">Ingresos</h1>
        <p class="mt-2 text-sm text-muted">Flujo de ingresos y facturación.</p>
      </header>
      <app-coming-soon title="Ingresos"></app-coming-soon>
    </div>
  `,
})
export class FinanceIncomePage {}
