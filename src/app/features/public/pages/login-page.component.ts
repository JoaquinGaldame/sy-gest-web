import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { LoginFormComponent } from '../components/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginFormComponent],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
  ],
  template: `
    <div class="min-h-screen bg-background">
      <div
        class="grid min-h-screen w-full grid-cols-1 items-center gap-10 px-10 py-12 md:grid-cols-2"
      >
        <div class="space-y-6" @fadeUp>
          <img
            src="assets/logos/sy-gest-logo-embedded-cropped.svg"
            alt="SyGest"
            class="h-16 w-auto"
          />
          <h1 class="font-display text-4xl font-semibold text-foreground">
            Bienvenido/a de nuevo
          </h1>
          <p class="text-base text-muted">
            Ingresa con tus credenciales corporativas para acceder a los módulos
            autorizados.
          </p>
          <a routerLink="/" class="text-sm font-semibold text-primary">
            Volver a la landing
          </a>
        </div>

        <div
          class="rounded-3xl border border-slate-200/70 bg-white/95 p-8 shadow-soft"
          @fadeUp
        >
          <h2 class="text-xl font-semibold text-foreground">Acceso seguro</h2>
          <p class="mt-2 text-sm text-muted">
            Utiliza tu email institucional y contraseña.
          </p>
          <div class="mt-6">
            <app-login-form></app-login-form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LoginPageComponent {}
