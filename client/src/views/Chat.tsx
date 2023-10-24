import React from "react";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

import ChatContainer from "../components/organisms/ChatContainer";
import Header from "../components/organisms/Header";

const Chat = (state: any) => {
    const { user, match } = state;
    const { userId, receiverName } = match.params;

    return(
        <div>
            <Header/>
            <Typography variant="h4">Chat with {receiverName}</Typography>

            <ChatContainer
                senderName={user.name}
                sender={user._id}
                receiver={userId}
                receiverName={receiverName}
                userToken={user.token}
            />
        </div>
    );
};

const mapStateToProps = (state: { auth: any }) => {
    return {
        user: state.auth.user,
    };
};

export default connect(
    mapStateToProps,
    null
)(Chat);