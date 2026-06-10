import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import "dotenv/config"

export function authRoute (
  req: Request,
  res: Response,
  next: NextFunction) {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ message: "No token provided" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" })
  }
}
