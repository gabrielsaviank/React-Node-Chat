import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./views/Login";
import Home from "./views/Home";
import history from "./history";
import PrivateRoute from "./helpers/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";

const App = (props: any) => {
    return (
        <Router history={history}>
            <AuthProvider>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <PrivateRoute
                        path="/home"
                        exact component={Home}
                        auth={props.isSignedIn}
                    />
                </Switch>
            </AuthProvider>
        </Router>
    );
};

const mapStateToProps = (state: any) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(
    mapStateToProps,
)(App);