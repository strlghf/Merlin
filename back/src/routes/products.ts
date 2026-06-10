import { Router } from "express";
import { getProducts } from "../controllers/products";
import { validateRequest } from "../middlewares/validateRequest";
import { getProductSchema } from "../lib/schemas/productsSchemas";

const router = Router();

router.get("/", validateRequest(getProductSchema), getProducts);

export default router;