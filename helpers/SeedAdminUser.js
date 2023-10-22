import { User } from "../models/User.js";
import passport from "passport";

export const SeedAdminUser = async () => {
    try {
        const adminUsername = "admin";

        const checkAdmin = await User.findOne({ username: adminUsername });

        if (checkAdmin) {
            return console.log("Admin Already Exists, skipping creation");
        }

        const adminUser = new User({
            username: "admin",
            name: "Admin",
            admin: true
        });

        adminUser.setPassword("1234", (err) => {
            if (err) {
                return console.log("IXChat Error", err);
            }

            adminUser.save()
                .then((newUser) => {
                    console.log("IXChat Admin User Created Successfully");
                })
                .catch((error) => {
                    console.log("IXChat Error", error);
                });
        });
    } catch (exception) {
        console.error("IXChat Error creating the initial user:", exception);
    }
};