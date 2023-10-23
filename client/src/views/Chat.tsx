import React from "react";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

import { ChatContainer } from "../components/organisms/ChatContainer";

const Chat = (state: any) => {
    const { user, match } = state;
    const { userId, receiverName } = match.params;

    return(
        <div>
            <Typography variant="h4">Chatting with {receiverName}</Typography>

            <ChatContainer
                senderName={user.name}
                sender={user._id}
                receiver={userId}
                receiverName={receiverName}
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