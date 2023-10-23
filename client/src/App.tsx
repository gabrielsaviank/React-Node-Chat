import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./views/Login";
import Home from "./views/Home";
import Chat from "./views/Chat";
import history from "./history";
import PrivateRoute from "./helpers/PrivateRoute";

const App = (props: any) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Login}/>
                <PrivateRoute
                    path="/home"
                    exact component={Home}
                    auth={props.isSignedIn}
                />
                <PrivateRoute
                    path="/chat/:userId/:receiverName"
                    exact component={Chat}
                    auth={props.isSignedIn}
                />
            </Switch>
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