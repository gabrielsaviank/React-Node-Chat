import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUsers } from "../ducks/actions/user-actions";

const Home = ({ user, users, getUsers }: any) => {
    useEffect(() => {
        if (user && user.token) {
            getUsers(user.token);
        }
    }, [user, getUsers]);


    return(
        <div>
            <h1>HomeScreen</h1>
        </div>
    );
};

const mapStateToProps = (state: { auth: any, users: any }) => {
    return {
        user: state.auth.user,
        users: state.users
    };
};

export default connect(
    mapStateToProps,
    { getUsers }
)(Home);