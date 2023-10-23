import React from "react";
import { Redirect } from "react-router-dom";

import { useAuth } from "../context/AuthProvider";

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const user = useAuth();

    if(!user){
        return <Redirect to="/"/>;
    }

    return children;
};

export default PrivateRoute;