import type { Request, Response, NextFunction } from "express"
import { prisma } from "../db/prisma"
import { getProductsService } from "../services/productService";

export async function getProducts(req: Request, res: Response, next: NextFunction) {
  try {
    const page = req.query.page as unknown as number;
    const limit = req.query.limit as unknown as number;
    const search = req.query.search as string;

    const { products, totalCount } = await getProductsService(page, limit, search);

    return res.status(200).json({
      data: products,
      pagination: { page, limit, total: totalCount }
    })
  } catch (err) {
    return next(err);
  }
}