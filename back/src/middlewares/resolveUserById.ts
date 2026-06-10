import type { Request, Response, NextFunction } from "express"
import { prisma } from "../db/prisma.ts";

export async function resolveUserById (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const parsedId = Number(id);

  if (isNaN(parsedId)) return res.status(400).json({ message: "Id must be a number" });

  try {
    const user = await prisma.users.findUnique({
      where: { id: parsedId }
    })

    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error?" });
  }
}