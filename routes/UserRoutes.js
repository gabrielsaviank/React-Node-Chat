import { Router } from "express";

import {
    getUsers,
    createUser,
    login,
    logout
} from "../controllers/UserControllers.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.post("/login", login);
router.get("/logout", logout);

export const userRoutes = router;