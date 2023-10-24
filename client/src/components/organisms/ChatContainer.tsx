import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const socket = io("http://localhost:5000");

type MessageType = {
    senderName: string;
    text?: string;
    sender: string;
    receiver: string;
    receiverName: string;
}

export const ChatContainer = ({ sender, receiver, senderName, receiverName }: MessageType) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<MessageType[]>([]);

    useEffect(() => {
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

    console.log(messages);
    return (
        <div>
            <List>
                {messages.map((msg, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={msg.senderName || "Anon"} secondary={msg.text} />
                    </ListItem>
                ))}
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
        </div>
    );
};

