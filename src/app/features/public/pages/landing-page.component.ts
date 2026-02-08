import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { trigger, transition, style, animate } from '@angular/animations';
import { LoginFormComponent } from '../components/login-form.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    DialogModule,
    LoginFormComponent,
  ],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
  ],
  template: `
    <div class="min-h-screen bg-background text-foreground">
      <header class="app-gradient">
        <div class="flex w-full items-center justify-between px-10 py-6">
          <div class="flex items-center gap-3">
            <img
              src="assets/logos/sy-gest-logo-embedded-cropped.svg"
              alt="SyGest"
              class="h-14 w-auto"
            />
          </div>
          <button
            pButton
            type="button"
            icon="pi pi-user"
            class="p-button-rounded p-button-text"
            (click)="openLogin()"
          >
            <span class="sr-only">Log in</span>
          </button>
        </div>

        <div
          class="grid w-full grid-cols-1 gap-10 px-10 pb-20 pt-12 md:grid-cols-2"
        >
          <div class="space-y-6" @fadeUp>
            <p
              class="text-sm font-semibold uppercase tracking-[0.24em] text-secondary"
            >
              Plataforma Empresarial
            </p>
            <h1
              class="font-display text-4xl font-semibold leading-tight md:text-5xl"
            >
              Gestión integrada para inventario, finanzas y talento.
            </h1>
            <p class="text-base text-muted md:text-lg">
              SyGest reúne en un solo panel la trazabilidad de tus operaciones,
              con módulos especializados y métricas accionables para equipos de
              alto rendimiento.
            </p>
            <div class="flex flex-wrap gap-4">
              <button pButton class="p-button-raised" type="button">
                Solicitar demo
              </button>
              <a routerLink="/login" class="text-sm font-semibold text-primary">
                Acceso directo
              </a>
            </div>
          </div>

          <div class="grid gap-4" @fadeUp>
            <div class="glass-panel rounded-3xl p-6 shadow-glow">
              <p
                class="text-xs font-semibold uppercase tracking-[0.24em] text-muted"
              >
                Módulos
              </p>
              <h2 class="mt-3 text-2xl font-semibold">
                Operaciones conectadas
              </h2>
              <p class="mt-2 text-sm text-muted">
                Inventario, RRHH, Finanzas y Administración con permisos
                centralizados.
              </p>
              <div class="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div
                  class="rounded-2xl border border-slate-200/50 bg-white/70 p-4"
                >
                  <i class="pi pi-box text-primary"></i>
                  <p class="mt-3 font-semibold">Inventario</p>
                  <p class="text-xs text-muted">Control total de stock</p>
                </div>
                <div
                  class="rounded-2xl border border-slate-200/50 bg-white/70 p-4"
                >
                  <i class="pi pi-users text-primary"></i>
                  <p class="mt-3 font-semibold">RRHH</p>
                  <p class="text-xs text-muted">Equipos alineados</p>
                </div>
                <div
                  class="rounded-2xl border border-slate-200/50 bg-white/70 p-4"
                >
                  <i class="pi pi-briefcase text-primary"></i>
                  <p class="mt-3 font-semibold">Finanzas</p>
                  <p class="text-xs text-muted">Visibilidad real</p>
                </div>
                <div
                  class="rounded-2xl border border-slate-200/50 bg-white/70 p-4"
                >
                  <i class="pi pi-shield text-primary"></i>
                  <p class="mt-3 font-semibold">Admin</p>
                  <p class="text-xs text-muted">Gobernanza segura</p>
                </div>
              </div>
            </div>
            <div
              class="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-soft"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.24em] text-muted"
              >
                Insights
              </p>
              <h3 class="mt-3 text-xl font-semibold">
                Decisiones en tiempo real
              </h3>
              <p class="mt-2 text-sm text-muted">
                Paneles listos para auditoría, monitoreo y seguimiento de KPIs.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section class="w-full px-10 py-16">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="rounded-3xl border border-slate-200/60 bg-white/80 p-6">
            <p
              class="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
            >
              Seguridad
            </p>
            <h3 class="mt-3 text-lg font-semibold">Accesos segmentados</h3>
            <p class="mt-2 text-sm text-muted">
              Roles y permisos alineados con cada unidad de negocio.
            </p>
          </div>
          <div class="rounded-3xl border border-slate-200/60 bg-white/80 p-6">
            <p
              class="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
            >
              Automatización
            </p>
            <h3 class="mt-3 text-lg font-semibold">Flujos aprobables</h3>
            <p class="mt-2 text-sm text-muted">
              Aprobaciones y trazabilidad sin procesos manuales.
            </p>
          </div>
          <div class="rounded-3xl border border-slate-200/60 bg-white/80 p-6">
            <p
              class="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
            >
              Reporting
            </p>
            <h3 class="mt-3 text-lg font-semibold">Reportes exportables</h3>
            <p class="mt-2 text-sm text-muted">
              Listos para contabilidad, inventarios y auditorías.
            </p>
          </div>
        </div>
      </section>

      <p-dialog
        header="Acceso rápido"
        [(visible)]="loginOpen"
        [modal]="true"
        [style]="{ width: '380px' }"
        [draggable]="false"
        [resizable]="false"
        styleClass="app-login-dialog"
      >
        <app-login-form></app-login-form>
      </p-dialog>
    </div>
  `,
})
export class LandingPageComponent {
  loginOpen = false;

  openLogin() {
    this.loginOpen = true;
  }
}
