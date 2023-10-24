import { Server } from "socket.io";

import { Message } from "../models/Message.js";

export const initSocketIO = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    io.on("connection", (socket) => {
        console.log("A user connected");

        socket.on("join room", (roomName) => {
            socket.join(roomName);
        });

        socket.on("chat message", (msg) => {
            console.log(msg);

            const newMessage = new Message({
                sender: msg.sender,
                receiver: msg.receiver,
                text: msg.text,
            });


            newMessage
                .save()
                .then(() => {
                    io.to(msg.sender).emit("chat message", msg);
                    io.to(msg.receiver).emit("chat message", msg);
                })
                .catch((error) => {
                    console.error("IXChat - Error saving the message to MongoDB:", error);
                });
        });

        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    });
};
