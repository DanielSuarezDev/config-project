/* eslint-disable no-console */
import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../types";

export const PrivateRoute: FC = ({ children }) => {
  const { isLogged, persisted } = useAuth();

  if (isLogged) {
    return children as ReactElement;
  }
  if (persisted) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
  }
  return <p>Loading...</p>;
};
