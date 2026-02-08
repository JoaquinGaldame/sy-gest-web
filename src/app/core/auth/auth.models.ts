export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'superuser';
  prefersDarkMode: boolean;
  isSuperUser?: boolean;
}

export interface AuthSession {
  accessToken: string;
  user: UserProfile;
}

export interface UserProfileResponse {
  id: string;
  username: string;
  email: string;
  super_user: boolean;
  group_id: string | null;
}

export interface UserProfileExtraResponse {
  id: number;
  user_id: string;
  first_name: string;
  last_name: string;
  prefers_dark_mode: boolean;
}

export interface AuthSessionResponse {
  user: UserProfileResponse;
  profile?: UserProfileExtraResponse | null;
  scope?: unknown;
  access_token: string;
  refresh_token?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
