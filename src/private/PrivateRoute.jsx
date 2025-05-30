import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from "../assets/lotties/loader.json"
import Lottie from "lottie-react";

const PrivateRoute = ({children}) => {

    const {user,loader}=use(AuthContext)
    const location = useLocation();

    if(loader){
        return <Lottie animationData={Loader} loop={true} autoplay={true} />
    }
    if(!user){
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;