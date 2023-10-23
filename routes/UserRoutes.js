import { Router } from "express";

import {
    getUsers,
    createUser,
    login,
    logout
} from "../controllers/UserControllers.js";
import { requireAuth } from "../middlewares/RequireAuth.js";

const router = Router();

router.post("/login", login);
router.use(requireAuth);
router.get("/", getUsers);
router.post("/", createUser);
router.get("/logout", logout);

export const userRoutes = router;