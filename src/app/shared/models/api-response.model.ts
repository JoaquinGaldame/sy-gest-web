export interface ApiResponse<T> {
  success: boolean;
  result: number;
  message: string;
  error: string | null;
  data: T | null;
  details?: unknown;
  meta?: PaginationMeta;
  debug?: ResponseDebug;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
  totalPages?: number;
}

export interface ResponseDebug {
  timestamp: string;
  path: string;
}

export interface ApiError {
  status: number;
  message: string;
  error: string | null;
  details?: unknown;
}
