import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

import history from "../history";
import { getUsers } from "../ducks/actions/user-actions";

export type UserType = {
    _id: string;
    username: string;
    name: string;
    token: string
}

type users = {
    users: UserType[]
}

type HomeStateType = {
    user: UserType;
    users: users;
    getUsers: any;
}

const Home = ({ user, users, getUsers }: HomeStateType) => {
    useEffect(() => {
        if (user && user.token) {
            getUsers(user.token);
        }
    }, [user, getUsers]);

    return(
        <div>
            <Typography variant="h4">IXChat Home</Typography>
            <List>
                {users.users.map((user: UserType) => (
                    <ListItem key={user._id}>
                        <ListItemText
                            primary={user.name}
                            secondary={user.username}
                            onClick={() => history.push(`/chat/${user._id}/${encodeURIComponent(user.name)}`)}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

const mapStateToProps = (state: { auth: any, users: users }) => {
    return {
        user: state.auth.user,
        users: state.users
    };
};

export default connect(
    mapStateToProps,
    { getUsers }
)(Home);