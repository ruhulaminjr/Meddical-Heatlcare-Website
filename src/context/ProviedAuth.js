import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
export const AuthProvider = createContext();

const ProviedAuth = ({ children }) => {
  const allAuth = useFirebase();
  return (
    <AuthProvider.Provider value={allAuth}>{children}</AuthProvider.Provider>
  );
};

export default ProviedAuth;
