import passport from "passport";
import LocalStrategy from "passport-local";

import { User } from "../models/User.js";

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username })
            .then(user => {
                if (!user) {
                    return done(null, false);
                }

                user.verifyPassword(password, (err, isMatch) => {
                    if (err) {
                        return done(err);
                    }

                    if (!isMatch) {
                        return done(null, false);
                    }

                    return done(null, user);
                });
            })
            .catch(err => {
                return done(err);
            });
    }
));