import React from 'react';
import { useNavigate } from "react-router-dom"
import UserDashboard from '../pages/user/UserDashboard';
import Signin from '../pages/Signin';

const PrivateRoute = ({children }) => {
  // return isAuthenticated ? children : <Navigate to="/login" />;
    const navigate = useNavigate()
    const auth = JSON.parse(localStorage.getItem('token'))||null;
    console.log(auth);
    if (auth){
        if (auth.token){
          return <UserDashboard/>
        }
    }
    else{
        return <Signin/>;
    }
};

export default PrivateRoute;