import type {
  ApiError,
  ApiResponse,
} from '../../shared/models/api-response.model';

export const isApiResponse = (
  value: unknown,
): value is ApiResponse<unknown> => {
  if (typeof value !== 'object' || value === null) return false;
  const maybe = value as Record<string, unknown>;
  return (
    'success' in maybe &&
    'result' in maybe &&
    'message' in maybe &&
    'error' in maybe &&
    'data' in maybe
  );
};

export const toApiError = (
  payload: ApiResponse<unknown> | null,
  fallbackStatus: number,
): ApiError => ({
  status: payload?.result ?? fallbackStatus,
  message: payload?.message ?? 'Error de comunicación con el servidor.',
  error: payload?.error ?? 'UNKNOWN_ERROR',
  details: payload?.details,
});
