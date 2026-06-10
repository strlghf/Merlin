import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser, updateUserPartial } from "../controllers/users.ts";
import { resolveUserById } from "../middlewares/resolveUserById.ts";
import { validateRequest } from "../middlewares/validateRequest.ts";
import { getUsersSchema, idParamSchema, createUserSchema, updateUserSchema } from "../lib/schemas/userSchemas.ts";

const router = Router();

router.get("/", validateRequest(getUsersSchema), getUsers);
router.get("/:id", validateRequest(idParamSchema), resolveUserById, getUserById);
router.post("/", validateRequest(createUserSchema), createUser);
router.put("/:id", validateRequest(updateUserSchema), resolveUserById, updateUser);
router.patch("/:id", validateRequest(idParamSchema.merge(updateUserSchema)), resolveUserById, updateUserPartial);
router.delete("/:id", validateRequest(idParamSchema), resolveUserById, deleteUser);

export default router;