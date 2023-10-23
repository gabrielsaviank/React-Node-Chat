import jwt from "jsonwebtoken";

import { User } from "../models/User.js";

export const getUsers = async(req, res) => {
    let users;

    try {
        users = await User.find({}, "-password");
    } catch (err) {
        res.status(422).send("IXChat: Error - Request Failed.");
    }

    res.status(200).json({ users });
};

export const createUser = async(req, res) => {
    const { username, name, password, admin } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ username: username });

        if(existingUser){
            return res.status(422).send("IXChat Error - User Already exists");
        }

        const user = new User({
            username,
            name,
            password,
            admin
        });
        await user.save();

        const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");

        res.send({ token });
    } catch (exception) {
        console.log("IXChat Error", exception);
        res.status(500).send("IXChat An error occurred while retrieving data");
    }
};

export const login = async(req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!username || !password) {
        return res.status(422).send({ error: "IXChat: Error - You must provide email and password" });
    }

    if (!user) {
        return res.status(422).send({ error: "IXChat: Error - Invalid username or password" });
    }

    try {
        await user.comparePassword(password);

        const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY", {
            expiresIn: 2592000
        });

        const userData = {
            username: user.username,
            name: user.name,
            admin: user.admin,
            token: token,
            _id: user._id
        };

        res.cookie("token", token, { httpOnly: true });
        res.json(userData);
    } catch (err) {
        return res.status(422).send({ error: "AlleSys: Error - Invalid username or password" });
    }
};

export const logout = async(req, res) => {

};