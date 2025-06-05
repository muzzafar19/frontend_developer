import React from 'react'
import { Navigate } from 'react-router-dom';

function Protectedroute({ children }) {

    const isAuth = localStorage.getItem("admin-auth");

    if (!isAuth) {
        return <Navigate to="/alogin" />
    }
    return children;

}

export default Protectedroute;
