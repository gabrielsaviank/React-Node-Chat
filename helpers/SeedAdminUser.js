import { User } from "../models/User.js";

export const SeedAdminUser = async () => {
    try {
        const adminUsername = "admin_ixchat";

        const checkAdmin = await User.findOne({ username: adminUsername });

        if (checkAdmin) {
            return console.log("Admin Already Exists, skipping creation");
        }

        const adminUser = new User({
            username: adminUsername,
            name: "Admin",
            password: "1234",
            admin: true
        });

        await adminUser.save();

        console.log("Admin User Created");
    } catch (exception) {
        console.error("IXChat Error creating the initial user:", exception);
    }
};