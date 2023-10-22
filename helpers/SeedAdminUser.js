import bcrypt from "bcrypt";

import { User } from "../models/User.js";

export const SeedAdminUser = async() => {
    try{
        const adminUsername = "admin";
        const adminPassword = "1234";

        const checkAdmin = await User.findOne({ username: adminUsername });

        if(checkAdmin) {
            return console.log("Admin Already Exists skipping creation");
        }

        const hashPassword = await bcrypt.hash(adminPassword, 10);

        const AdminUser = new User({
            username: "admin",
            name: "Admin",
            password: hashPassword,
            admin: true
        });

        await AdminUser.save();

        console.log("IXChat Admin User Created Successfully");
    } catch (exception) {
        console.error("IXChat Error creating the initial user:", exception);
    }
};