import { Router } from "express";

import { getUserMessages } from "../controllers/MessageControllers.js";
import { requireAuth } from "../middlewares/RequireAuth.js";

const router = Router();

router.use(requireAuth);
router.get("/", getUserMessages);

export const messageRoutes = router;