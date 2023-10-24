import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import Box from "@mui/material/Box";

import history from "../history";
import { getUsers } from "../ducks/actions/user-actions";
import { Header } from "../components/organisms/Header";

export type UserType = {
    _id: string;
    username: string;
    name: string;
    token: string
    admin?: boolean
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

    const currentUser = user.name;

    const userList = useMemo(() => {
        return users.users.map((user: UserType) => (
            <ListItem key={user._id}>
                <ListItemText
                    primary={user.name === currentUser ? `${user.name} (You)` : user.name}
                    secondary={user.username}
                    onClick={() =>
                        history.push(`/chat/${user._id}/${encodeURIComponent(user.name)}`)
                    }
                />
                <ChatIcon />
            </ListItem>
        ));
    }, [users.users]);

    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Header isAdmin={user.admin}/>
            <Box
                style={{ width: "70%" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Typography variant="h4">IXChat Home</Typography>
                <List>
                    {userList}
                </List>
            </Box>
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