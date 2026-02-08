import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Store } from '@ngrx/store';
import { selectAuthLoading } from '../../../core/state/auth/auth.selectors';
import * as AuthActions from '../../../core/state/auth/auth.actions';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">
      <div>
        <label for="login-email" class="text-sm font-semibold text-foreground"
          >Email</label
        >
        <input
          id="login-email"
          pInputText
          type="email"
          formControlName="email"
          class="mt-2 w-full"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label
          for="login-password"
          class="text-sm font-semibold text-foreground"
          >Contraseña</label
        >
        <p-password
          inputId="login-password"
          formControlName="password"
          [feedback]="false"
          [toggleMask]="true"
          styleClass="mt-2 w-full"
          inputStyleClass="w-full"
          placeholder="••••••••"
        ></p-password>
      </div>

      <button
        pButton
        type="submit"
        class="w-full p-button-raised"
        [loading]="(loading$ | async) ?? false"
      >
        Ingresar
      </button>
    </form>
  `,
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store);
  loading$ = this.store.select(selectAuthLoading);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = this.form.getRawValue();
    this.store.dispatch(
      AuthActions.loginRequested({
        payload: {
          email: payload.email ?? '',
          password: payload.password ?? '',
        },
      }),
    );
  }
}
