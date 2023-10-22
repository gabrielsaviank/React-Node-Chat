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

export const User = model("User", userSchema);