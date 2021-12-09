/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { AuthActions, AuthState } from "./models";

export const defaultAuthState: AuthState = {
  isLogged: false,
  tokens: {
    accessToken: "",
  },
  user: {
    uid: "",
    email: "",
    displayName: "",
    photoURL: "",
  },
  persisted: false,
};

export const defaultAuthActions: AuthActions = {
  logIn: () => {},
  logOut: () => {},
};

export type AuthContextType = AuthState & AuthActions;

export const defaultAuthContext: AuthContextType = {
  ...defaultAuthState,
  ...defaultAuthActions,
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);
