import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthUser = () => {
  const authUser = use(AuthContext);

  return authUser;
};

export default AuthUser;
