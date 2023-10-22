import passport from "passport";

import { User } from "../models/User.js";

export const getUsers = (req, res) => {
    if (req.isAuthenticated()) {
        // Only authenticated users can access this route
        User.find()
            .then((users) => {
                res.status(200).send(users);
            })
            .catch((error) => {
                console.log("IXChat Error", error);
                res.status(500).send("IXChat An error occurred while retrieving data");
            });
    } else {
        res.status(401).send("IXChat Error - Unauthorized");
    }
};

export const createUser = (req, res) => {
    passport.authenticate("local", (err, authUser) => {
        if (err) {
            console.log("IXChat Error", err);
            return res.status(500).send("IXChat An error occurred while retrieving data");
        }

        if (authUser) {
            return res.status(422).send("IXChat Error - User Already exists");
        }

        const { username, name, password, admin } = req.body;
        const user = new User({ username, name, password, admin });

        user.save()
            .then((newUser) => {
                res.send(newUser);
            })
            .catch((error) => {
                console.log("IXChat Error", error);
                res.status(500).send("IXChat An error occurred while saving the user");
            });
    })(req, res);
};


export const login = (req, res) => {
    passport.authenticate("local", (error, user) => {
        if (error) {
            console.log("IXChat Error", error);
            return res.status(500).send("IXChat An error occurred while retrieving data");
        }

        if (!user) {
            return res.status(401).send("IXChat Error - Unauthorized");
        }
        req.logIn(user, (error) => {
            if (error) {
                console.log("IXChat Error", error);
                return res.status(500).send("IXChat An error occurred while retrieving data");
            }

            res.send("IXChat Login Successful");
        });
    })(req, res);
};

export const logout = (req, res) => {
    req.logout();
    res.send("IXChat Logout Successfully");
};