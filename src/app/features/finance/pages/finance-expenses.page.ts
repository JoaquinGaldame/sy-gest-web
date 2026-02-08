import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-finance-expenses-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">Gastos</h1>
        <p class="mt-2 text-sm text-muted">Control de egresos y pagos.</p>
      </header>
      <app-coming-soon title="Gastos"></app-coming-soon>
    </div>
  `,
})
export class FinanceExpensesPage {}
