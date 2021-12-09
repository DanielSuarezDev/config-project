/* eslint-disable no-console */
import React from "react";
import { useAuth } from "../../hooks/useAuth";

export const Home = () => {
  const { user } = useAuth();
  const { displayName, email, photoURL } = user;
  console.log(photoURL);
  return (
    <div>
      <h1>{displayName}</h1>
      <h3>{email}</h3>
      <img src={photoURL} alt="photo" width="150" height="150" />
    </div>
  );
};
