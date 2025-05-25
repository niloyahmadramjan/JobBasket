import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../services/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {
  // user registration use email and password
  const handeCreateAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignInEmailPass = (email,pass)=>{
    return signInWithEmailAndPassword(auth,email,pass)
  }

  const authinfo = {
    handeCreateAccount,
    handleSignInEmailPass
  };
  return <AuthContext value={authinfo}>{children}</AuthContext>;
};

export default AuthProvider;
