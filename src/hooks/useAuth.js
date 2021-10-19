import { useContext } from "react";
import { AuthProvider } from "../context/ProviedAuth";

const useAuth = () => {
  return useContext(AuthProvider);
};

export default useAuth;
