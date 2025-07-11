import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../services/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);
  // user registration use email and password
  const handeCreateAccount = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user login use email pass
  const handleSignInEmailPass = (email, pass) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // user log out
  const handleLogOut = () => {
    return signOut(auth);
  };

  const authinfo = {
    handeCreateAccount,
    handleSignInEmailPass,
    loader,
    user,
    setLoader,
    handleLogOut,
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      // jwt api call 
     if(currentUser?.email){
      const userData = {email : currentUser.email}
      axios.post('http://localhost:3000/jwt',userData,{
        withCredentials: true
      })
      .then(res=> {
        console.log(res.data)
      })
      .catch(error => console.log(error))
     }



    });
    return () => unSubcribe();
  }, []);

  return <AuthContext value={authinfo}>{children}</AuthContext>;
};

export default AuthProvider;
