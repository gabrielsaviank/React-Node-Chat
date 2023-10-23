import { Schema, model } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";

const userSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    password: String,
    admin: { type: Boolean, required: true },
    online: { type: Boolean, required: false }
});

userSchema.pre("save", function(next) {
    const user= this;

    if (!user.isModified("password")) {
        return next();
    }

    genSalt(10, (error, salt) => {
        if(error){
            return next(error);
        }

        hash(user.password, salt, (error, hash) => {
            if (error) {
                return next(error);
            }

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;

    return new Promise((resolve, reject) => {
        compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            }

            if (!isMatch) {
                return reject(false);
            }

            resolve(true);
        });
    });
};

export const User = model("User", userSchema);