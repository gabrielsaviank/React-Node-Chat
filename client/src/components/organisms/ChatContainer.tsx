import React, { useState, useEffect, useMemo } from "react";
import io from "socket.io-client";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { connect } from "react-redux";

import { getMessages } from "../../ducks/actions/message-actions";
import history from "../../history";

const socket = io("http://localhost:5000");

type MessagePropsType = {
    senderName: string;
    text?: string;
    sender: string;
    receiver: string;
    receiverName: string;
    getMessages: any;
    userToken: string;
    fetchedMessages?: any;
}

type MessageType = {
    senderName: string;
    text?: string;
    sender: string;
    receiver: string;
    receiverName: string;
}

const ChatContainer = ({
   sender,
   receiver,
   senderName,
   receiverName,
   getMessages,
   userToken,
   fetchedMessages,
}: MessagePropsType) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<MessageType[]>( fetchedMessages.messages || []);

    useEffect(() => {
        getMessages({ userToken, senderId: sender, receiverId: receiver });

        socket.emit("join room", receiver);

        socket.on("chat message", (msg) => {
            if (msg.sender !== sender) {
                setMessages((prevMessages) => [...prevMessages, msg]);
            }
        });

        return () => {
            socket.emit("leave room", receiver);
        };
    }, [receiver]);

    useEffect(() => {
        if (fetchedMessages) {
            setMessages(fetchedMessages.messages || []);
        }
    }, [fetchedMessages]);

    const handleSendMessage = () => {
        if (message) {
            const newMessage = {
                text: message,
                sender: sender,
                receiver: receiver,
                senderName: senderName,
                receiverName: receiverName,
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);

            socket.emit("chat message", newMessage);
            setMessage("");
        }
    };

    const messagesList = useMemo(() => {
        return messages.map((msg, index) => (
            <ListItem key={index}>
                <ListItemText primary={msg.senderName || "Anon"} secondary={msg.text} />
            </ListItem>
        ));
    }, [messages]);

    return (
        <div>
            <List>
                {messagesList}
            </List>
            <TextField
                type="text"
                label="Type a message"
                variant="outlined"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendMessage}
                style={{ marginTop: "10px" }}
            >
                Send
            </Button>

            <Button
                variant="contained"
                color="warning"
                onClick={() => history.push("/home")}
                style={{ marginTop: "10px" }}
            >
                Back
            </Button>
        </div>
    );
};

const mapStateToProps = (state: { messages: [] }) => {
    return {
        fetchedMessages: state.messages
    };
};

export default connect(
    mapStateToProps,
    { getMessages }
)(ChatContainer);

