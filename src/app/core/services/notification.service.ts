import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private messageService = inject(MessageService);

  success(summary: string, detail?: string) {
    this.messageService.add({
      severity: 'success',
      summary,
      detail: detail ?? 'Operación completada correctamente.',
    });
  }

  info(summary: string, detail?: string) {
    this.messageService.add({
      severity: 'info',
      summary,
      detail: detail ?? 'Información disponible.',
    });
  }

  warn(summary: string, detail?: string) {
    this.messageService.add({
      severity: 'warn',
      summary,
      detail: detail ?? 'Revisa los datos ingresados.',
    });
  }

  error(summary: string, detail?: string) {
    this.messageService.add({
      severity: 'error',
      summary,
      detail: detail ?? 'Ocurrió un error inesperado.',
    });
  }
}
