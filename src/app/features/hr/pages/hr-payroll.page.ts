import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-hr-payroll-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">Nómina</h1>
        <p class="mt-2 text-sm text-muted">Flujo de pagos y compensaciones.</p>
      </header>
      <app-coming-soon title="Nómina"></app-coming-soon>
    </div>
  `,
})
export class HrPayrollPage {}
