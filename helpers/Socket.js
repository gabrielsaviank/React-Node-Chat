import { Server } from "socket.io";

export const initSocketIO = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:3000", // Replace with the actual origin of your frontend
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    io.on("connection", (socket) => {
        console.log("A user connected");

        socket.on("chat message", (msg) => {
            console.log("estean message");
            console.log(msg);
        });

        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    });
};