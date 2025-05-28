import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthUser = () => {
  const authUser = useContext(AuthContext);

  return authUser;
};

export default AuthUser;
