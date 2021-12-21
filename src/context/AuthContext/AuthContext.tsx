/* eslint-disable no-console */
import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
} from "@firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/types";

export interface UserConfig {
  uid: string;
  email?: string;
  phone?: string;
  displayName?: string;
  photoURL?: string;
  authMethod?: "EMAIL";
}

export interface User {
  id: string;
  uid: string;
  document?: string;
  email?: string;
  phone?: string;
  originId?: number;
}

export interface Store {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  imageUrl?: string;
  storeTypeId?: number;
  countryId?: number;
}

export interface AutContextType {
  userConfig?: UserConfig;
  setUserConfig: (value: UserConfig) => void;
  user?: User;
  setUser: (value: User | undefined) => void;
  store?: Store;
  setStore: (value: Store | undefined) => void;
  stores?: Store[];
  setStores: (value: Store[] | []) => void;
  googleSignIn: () => void;
  getTokenFromJwt: (token: string) => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AutContextType>({} as AutContextType);

export const AuthProvider: FC = ({ children }) => {
  const [userConfig, setUserConfig] = useState<UserConfig>();
  const [user, setUser] = useState<User>();
  const [store, setStore] = useState<Store>();
  const [stores, setStores] = useState<Store[]>();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user as UserConfig;
        const userConfigObj = {
          uid,
          email,
          displayName,
          photoURL,
          authMethod: "EMAIL",
        } as UserConfig;
        setUserConfig(userConfigObj);
      }
    });
  }, []);

  const cleanData = (): void => {
    localStorage.clear();
    setUser(undefined);
    setUserConfig(undefined);
    setStores([]);
    setUserConfig(undefined);
  };

  const googleSignIn = (): void => {
    const provider = new GoogleAuthProvider();
    try {
      signInWithPopup(auth, provider);
    } catch (error) {
      cleanData();
    }
  };

  const logOut = async (): Promise<void> => {
    await signOut(auth);
    cleanData();
    navigate(ROUTES.LOGIN, { replace: true });
  };

  const getTokenFromJwt = async (token: string): Promise<void> => {
    try {
      await signInWithCustomToken(auth, token);
    } catch (error) {
      sessionStorage.removeItem("USER_CONFIG");
    }
  };

  const value: AutContextType = {
    userConfig,
    setUserConfig,
    user,
    setUser,
    store,
    setStore,
    stores,
    setStores,
    googleSignIn,
    getTokenFromJwt,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AutContextType => useContext(AuthContext);
