import { User } from "../models/User.js";

export const getUsers = async(req, res) => {
    try {
        const users = await User.find();

        res.status(200).send(users);
    } catch (exception) {
        console.log("IXChat Error", exception);
        res.status(500).send("IXChat An error ocurred while retrieving data");
    }
};

export const createUser = async(req, res) => {
    try {
        const data = req.body;

        console.log(data);
    } catch (exception) {
        console.log("IXChat Error", exception);
        res.status(500).send("IXChat An error occurred while retrieving data");
    }
};