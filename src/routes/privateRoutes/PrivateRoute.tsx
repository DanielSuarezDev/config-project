/* eslint-disable no-console */
import { FC, ReactElement } from "react";
import { Navigate } from "react-router";

import { useAuth } from "../../context/AuthContext/AuthContext";
import { ROUTES } from "../types";

export const PrivateRoute: FC = ({ children }) => {
  const { userConfig } = useAuth();

  if (userConfig) {
    return children as ReactElement;
  }
  return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
};
