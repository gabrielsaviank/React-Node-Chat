import { model } from "mongoose";
import jwt from "jsonwebtoken";

const User = model("User");

export const requireAuth = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: "AlleSys: You must be logged in" });
    }

    const token = authorization.replace("Bearer ", "");

    jwt.verify(token, "MY_SECRET_KEY", async (error, payload) => {
        if (error) {
            return res.status(401).send({ error: "IXChat: Invalid Token please contact support" });
        }

        const { userId } = payload;
        const user = await User.findById(userId);
        req.user = user;

        next();
    });
};