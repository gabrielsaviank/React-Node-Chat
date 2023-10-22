import passport from "passport";
import LocalStrategy from "passport-local";

import { User } from "../models/User.js";

passport.use(
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
        },
        User.authenticate()
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());