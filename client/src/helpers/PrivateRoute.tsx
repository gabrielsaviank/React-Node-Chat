import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (auth: any) => {
    if(!auth.auth){
        return <Redirect to="/login"  />;
    }

    return <Route {...auth}/>;
};

export default PrivateRoute;