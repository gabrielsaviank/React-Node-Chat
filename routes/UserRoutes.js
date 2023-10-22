import { Router } from "express";

import { getUsers, createUser } from "../controllers/UserControllers.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);

export const userRoutes = router;