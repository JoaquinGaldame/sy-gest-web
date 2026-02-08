import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-8 shadow-soft backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
    >
      <div class="flex items-start gap-4">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-accent)]/15 text-[color:var(--color-primary)]"
        >
          <i class="pi pi-compass text-xl"></i>
        </div>
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
          >
            Próximamente
          </p>
          <h3 class="mt-2 text-xl font-semibold text-foreground">
            {{ title }}
          </h3>
          <p class="mt-2 text-sm text-muted">
            Este módulo se encuentra en planificación. Mantendremos
            actualizaciones a medida que avancemos con el desarrollo.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class ComingSoonComponent {
  @Input() title = 'Sección en construcción';
}
