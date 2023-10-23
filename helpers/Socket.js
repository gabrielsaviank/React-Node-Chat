import { Server } from "socket.io";

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
            io.to(msg.sender).emit("chat message", msg);
            io.to(msg.receiver).emit("chat message", msg);
            console.log(msg);
        });

        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    });
};