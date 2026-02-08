import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-system-admin-dashboard-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">
          Administración de Sistema
        </h1>
        <p class="mt-2 text-sm text-muted">
          Control central para superusuarios.
        </p>
      </header>
      <app-coming-soon title="Administración de Sistema"></app-coming-soon>
    </div>
  `,
})
export class SystemAdminDashboardPage {}
