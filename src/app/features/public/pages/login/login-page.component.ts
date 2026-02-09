import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { trigger, transition, style, animate } from '@angular/animations';
import { LoginFormComponent } from '../../components/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(30px) scale(0.95)',
        }),
        animate(
          '700ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            opacity: 1,
            transform: 'translateY(0) scale(1)',
          }),
        ),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-50px)',
        }),
        animate(
          '600ms 300ms ease-out',
          style({
            opacity: 1,
            transform: 'translateX(0)',
          }),
        ),
      ]),
    ]),
  ],
})
export class LoginPageComponent {
  // Propiedades para el estado del formulario
  isLoading = false;
  showSecurityTips = false;

  // Método para manejar el login (puede ser conectado al formulario)
  onLoginSubmit() {
    this.isLoading = true;
    // Simular llamada API
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  // Método para alternar tips de seguridad
  toggleSecurityTips() {
    this.showSecurityTips = !this.showSecurityTips;
  }

  // Método para login con proveedores externos
  loginWithProvider(provider: string) {
    this.isLoading = true;
    console.log(`Login con ${provider}`);
    // Implementar lógica de OAuth aquí
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // Método para solicitar recuperación de contraseña
  requestPasswordReset() {
    // Implementar lógica de recuperación
    console.log('Solicitar recuperación de contraseña');
  }

  // Método para obtener la hora actual (puede usarse para mensajes contextuales)
  getCurrentGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  }
}
