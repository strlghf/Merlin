import { Router } from "express";
import usersRouter from "./users.ts";

const router = Router();

router.use("/api/users", usersRouter);

export default router;