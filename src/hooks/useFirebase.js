import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.init";
firebaseInitialize();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser(null);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [user]);

  return {
    user,
    error,
    setError,
    isLoading,
    logInWithGoogle,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    setUser,
    logOut,
  };
};

export default useFirebase;
