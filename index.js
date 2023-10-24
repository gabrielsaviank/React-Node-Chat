import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import { userRoutes } from "./routes/UserRoutes.js";
import { messageRoutes } from "./routes/MessageRoutes.js";
import { corsOptions } from "./helpers/CorsOptions.js";
import { initSocketIO } from "./helpers/Socket.js";
import { SeedAdminUser } from "./helpers/SeedAdminUser.js";
import { createServer } from "node:http";

dotenv.config();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || "MY_SECRET_KEY";
const DB_URI = process.env.DATABASE_URL || "MY_DB_URI";

const app = express();

const server = createServer(app);

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/messages", messageRoutes);

try{
    mongoose.connect(DB_URI), {
        useNewUrlParse: true,
        useUnifiedTopology: true,
        pass: SECRET_KEY
    };

    initSocketIO(server);

    SeedAdminUser();

    server.listen( PORT, () => {
        console.log( `IXChat Listening on http://localhost:${ PORT }` );
    });
} catch (exception) {
    console.log(exception);
    throw new Error("Error connecting to the DB");
}