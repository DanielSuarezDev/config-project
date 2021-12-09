/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-console */
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../../config/firebase";
import { LogInPayload } from "../../../context";
import { useAuth } from "../../../hooks/useAuth";

interface UserLogin {
  uid: null | string;
  email: string;
  displayName: string;
  photoURL: string;
  tokens: { accessToken: string };
}

const initialState = {
  uid: null,
  email: "",
  displayName: "",
  photoURL: "",
  tokens: { accessToken: "" },
};

export const useAuthentication = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserLogin>(initialState);

  const startGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const { uid, email, displayName, photoURL } = result?.user;
      setUser({
        uid,
        email,
        displayName,
        photoURL,
        tokens: { accessToken: credential?.accessToken },
      } as UserLogin);
    } catch (error) {
      console.log(error);
      setUser(initialState);
    }
  };

  useEffect(() => {
    if (user.uid != null) {
      logIn(user as LogInPayload);
      navigate("/", { replace: true });
    }
  }, [user.uid]);

  return { startGoogleLogin, user };
};
