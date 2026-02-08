import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-system-admin-audit-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">Auditoría</h1>
        <p class="mt-2 text-sm text-muted">
          Registro y trazabilidad del sistema.
        </p>
      </header>
      <app-coming-soon title="Auditoría"></app-coming-soon>
    </div>
  `,
})
export class SystemAdminAuditPage {}
