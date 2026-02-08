import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-hr-dashboard-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">Recursos Humanos</h1>
        <p class="mt-2 text-sm text-muted">
          Vista general del módulo de talento.
        </p>
      </header>
      <app-coming-soon title="Recursos Humanos"></app-coming-soon>
    </div>
  `,
})
export class HrDashboardPage {}
