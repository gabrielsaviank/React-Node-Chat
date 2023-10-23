import React from "react";
import { Route, Router, Switch } from "react-router-dom";


import Login from "./views/Login";
import Home from "./views/Home";
import history from "./history";
import PrivateRoute from "./helpers/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
    return (
        <Router history={history}>
            <AuthProvider>
                <Route path="/" exact component={Login}/>
                <Switch>
                    <PrivateRoute>
                        <Route path="/home" exact component={Home} />
                    </PrivateRoute>
                </Switch>
            </AuthProvider>
        </Router>
    );
};

export default App;
