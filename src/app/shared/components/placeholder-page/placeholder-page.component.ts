import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ComingSoonComponent } from '../../ui/coming-soon/coming-soon.component';

@Component({
  selector: 'app-placeholder-page',
  standalone: true,
  imports: [CommonModule, ComingSoonComponent],
  template: `
    <div class="space-y-8">
      <header>
        <h1 class="text-3xl font-semibold text-foreground">{{ title }}</h1>
        <p class="mt-2 text-sm text-muted">
          Este espacio está reservado para la próxima versión del módulo.
        </p>
      </header>

      <app-coming-soon [title]="title"></app-coming-soon>
    </div>
  `,
})
export class PlaceholderPageComponent {
  private route = inject(ActivatedRoute);
  title = 'Sección';

  constructor() {
    this.title = this.route.snapshot.data['title'] ?? this.title;
  }
}
