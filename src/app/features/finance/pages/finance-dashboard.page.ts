import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-finance-dashboard-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">
          Gestión Financiera
        </h1>
        <p class="mt-2 text-sm text-muted">Panel principal de finanzas.</p>
      </header>
      <app-coming-soon title="Gestión Financiera"></app-coming-soon>
    </div>
  `,
})
export class FinanceDashboardPage {}
