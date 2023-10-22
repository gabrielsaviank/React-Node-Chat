import { Schema, model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    password: String,
    admin: { type: Boolean, required: true },
    online: { type: Boolean, required: false }
});

userSchema.plugin(passportLocalMongoose);

userSchema.methods.verifyPassword = function (password, callback) {
    this.constructor.authenticate()(this.username, password, (err, user) => {
        if (err) {
            return callback(err);
        }
        return callback(null, user !== false);
    });
};

export const User = model("User", userSchema);