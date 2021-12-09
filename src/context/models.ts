export interface AuthState {
  isLogged: boolean;
  tokens: {
    accessToken: string;
  };
  user: {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
  };
  persisted: boolean;
}

export interface AuthActions {
  logIn: (payload: LogInPayload) => void;
  logOut: () => void;
}

export interface LogInPayload {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  tokens: { accessToken: string };
}
