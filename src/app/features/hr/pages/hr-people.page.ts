import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-hr-people-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">Colaboradores</h1>
        <p class="mt-2 text-sm text-muted">Gestión de perfiles y equipos.</p>
      </header>
      <app-coming-soon title="Colaboradores"></app-coming-soon>
    </div>
  `,
})
export class HrPeoplePage {}
