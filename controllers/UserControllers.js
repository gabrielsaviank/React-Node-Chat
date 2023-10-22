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
    const { username, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ username: username });

        if(existingUser){
            return res.status(422).send("IXChat Error - User Already exists");
        }

        const user = new User({
            username,
            password
        });

        await user.save();

        res.send(user);
    } catch (exception) {
        console.log("IXChat Error", exception);
        res.status(500).send("IXChat An error occurred while retrieving data");
    }
};