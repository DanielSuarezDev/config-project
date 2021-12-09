import { FC, useEffect, useState } from "react";
import {
  AuthContext,
  AuthContextType,
  defaultAuthState,
  defaultAuthContext,
} from "./AuthContext";
import { getAuthActions } from "./actions";

export const AuthProvider: FC = ({ children }) => {
  const [authState, setAuthState] =
    useState<AuthContextType>(defaultAuthContext);

  useEffect(() => {
    const persistLog = sessionStorage.getItem("loggedIn");
    const authAction = getAuthActions(setAuthState);
    let authState = defaultAuthState;

    if (persistLog != null) {
      authState = JSON.parse(persistLog);
    }

    setAuthState({
      ...authState,
      ...authAction,
      persisted: true,
    });
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
