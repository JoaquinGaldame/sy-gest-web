import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 flex items-start justify-center px-4 md:px-6 pt-6">
  <div class="w-full max-w-5xl">
    <div class="relative">
      
      <!-- Elementos decorativos de fondo simplificados -->
      <div class="fixed -top-40 -left-40 w-80 h-80 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="fixed -bottom-40 -right-40 w-80 h-80 bg-[color:var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <!-- Tarjeta principal -->
      <div class="relative rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/95 shadow-2xl p-8 md:p-12">
        
        <!-- Cabecera simplificada -->
        <div class="text-center mb-12">
          
          <!-- Badge de estado -->
          <div class="inline-flex items-center rounded-full bg-amber-500/15 px-5 py-2.5 text-sm font-semibold text-amber-700 dark:text-amber-300 border border-amber-500/25 mb-8 shadow-sm">
            <i class="pi pi-wrench mr-2"></i>
            EN DESARROLLO
          </div>
          <div class="max-w-3xl mx-auto">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-primary)] dark:text-[color:var(--color-accent)] mb-4">
              PRÓXIMAMENTE
            </p>
            <h1 class="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
              {{ title }}
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Estamos trabajando en esta sección para ofrecerte la mejor experiencia.
            </p>
          </div>
        </div>
            
        <div class="grid md:grid-cols-2 gap-8 mb-10">
          <div class="space-y-6">
            <div class="space-y-4">
              <h2 class="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                ¿Qué encontrarás aquí?
              </h2>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Este módulo está actualmente en fase de planificación y desarrollo. 
                Estamos trabajando para ofrecerte una experiencia completa y funcional.
              </p>
              <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                Mantendremos actualizaciones periódicas sobre el progreso del desarrollo 
                y las nuevas características que se implementarán.
              </p>
            </div>
            <div class="pt-4">
              <h3 class="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">Progreso del desarrollo</h3>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <i class="pi pi-check"></i>
                  </div>
                  <div class="flex-1">
                    <p class="font-medium text-slate-700 dark:text-slate-300">Planificación completada</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400">Análisis de requerimientos</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400">
                    <i class="pi pi-cog animate-spin"></i>
                  </div>
                  <div class="flex-1">
                    <p class="font-medium text-slate-700 dark:text-slate-300">Desarrollo en progreso</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400">Implementación de funcionalidades</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300/20 text-slate-400 dark:text-slate-500">
                    <i class="pi pi-clock"></i>
                  </div>
                  <div class="flex-1">
                    <p class="font-medium text-slate-400 dark:text-slate-500">Pruebas y lanzamiento</p>
                    <p class="text-sm text-slate-400 dark:text-slate-500">Por comenzar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-8">
            <div class="space-y-6">
              <h2 class="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                Características planeadas
              </h2>
              <div class="grid gap-4">
                <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors">
                  <i class="pi pi-star-fill text-lg text-amber-500 mt-0.5"></i>
                  <div>
                    <p class="font-medium text-slate-700 dark:text-slate-300">Funcionalidades innovadoras</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Nuevas herramientas para mejorar tu experiencia</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors">
                  <i class="pi pi-shield text-lg text-emerald-500 mt-0.5"></i>
                  <div>
                    <p class="font-medium text-slate-700 dark:text-slate-300">Seguridad avanzada</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Protección de datos y privacidad garantizada</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors">
                  <i class="pi pi-bolt text-lg text-blue-500 mt-0.5"></i>
                  <div>
                    <p class="font-medium text-slate-700 dark:text-slate-300">Rendimiento óptimo</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Velocidad y eficiencia en cada operación</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-4 border-t border-slate-200 dark:border-slate-700">
              <h3 class="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">¿Necesitas más información?</h3>
              <div class="space-y-3">
                <a href="#" class="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-[color:var(--color-primary)] dark:hover:text-[color:var(--color-accent)] transition-colors group">
                  <i class="pi pi-envelope group-hover:scale-110 transition-transform"></i>
                  <span>Recibe actualizaciones por email</span>
                </a>
                <a href="#" class="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-[color:var(--color-primary)] dark:hover:text-[color:var(--color-accent)] transition-colors group">
                  <i class="pi pi-comments group-hover:scale-110 transition-transform"></i>
                  <span>Envía tus sugerencias</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `]
})
export class ComingSoonComponent {
  @Input() title = 'Sección en construcción';
}