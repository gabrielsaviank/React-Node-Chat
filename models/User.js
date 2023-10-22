import { Schema, model } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    online: { type: Boolean, required: false }
});

userSchema.pre("save", function(next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }

    genSalt(10, (error, salt) => {
        if(error){
            return next(error);
        }

        hash(user.password, salt, (error, hash) => {
            if(error){
                return next(error);
            }

            user.password = hash;

            next();
        });
    });

});

export const User = model("User", userSchema);