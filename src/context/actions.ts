import { AuthContextType, defaultAuthState } from "./AuthContext";

import { AuthActions } from "./models";

export const getAuthActions = (
  setAuthState: (value: React.SetStateAction<AuthContextType>) => void
): AuthActions => {
  const authActions: AuthActions = {
    logIn: (payload) => {
      setAuthState((state) => {
        const newState = {
          ...state,
          isLogged: true,
          tokens: {
            ...state.tokens,
            accessToken: payload.tokens.accessToken,
          },
          user: {
            ...state.user,
            uid: payload.uid,
            email: payload.email,
            displayName: payload.displayName,
            photoURL: payload.photoURL,
          },
        };
        sessionStorage.setItem("loggedIn", JSON.stringify(newState));

        return newState;
      });
    },
    logOut: () => {
      setAuthState((state) => {
        const newState = {
          ...state,
          ...defaultAuthState,
          persisted: true,
        };
        sessionStorage.setItem("loggedIn", "");

        return newState;
      });
    },
  };

  return authActions;
};
