import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loader}=use(AuthContext)
    const location = useLocation();

    if(loader){
        return <p>Loading....</p>
    }
    if(!user){
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;