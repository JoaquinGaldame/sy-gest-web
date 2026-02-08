import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import type { ApiResponse } from '../../shared/models/api-response.model';
import type { AuthSessionResponse, LoginPayload } from '../auth/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private http = inject(HttpClient);
  private readonly baseUrl = environment.apiBaseUrl;

  login(payload: LoginPayload): Observable<ApiResponse<AuthSessionResponse>> {
    return this.http.post<ApiResponse<AuthSessionResponse>>(
      `${this.baseUrl}/auth/login`,
      payload,
    );
  }
}
