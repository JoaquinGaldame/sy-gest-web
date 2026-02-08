import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../../shared/ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-system-admin-users-page',
  standalone: true,
  imports: [ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">
          Gestión de Usuarios
        </h1>
        <p class="mt-2 text-sm text-muted">
          Administración de cuentas y permisos.
        </p>
      </header>
      <app-coming-soon title="Gestión de Usuarios"></app-coming-soon>
    </div>
  `,
})
export class SystemAdminUsersPage {}
