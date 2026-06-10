import type { Request, Response, NextFunction } from "express";
import { getAllUsersService, createUserService, updateUserService, deleteUserService } from "../services/users.ts";

export async function getUsers (req: Request, res: Response, next: NextFunction) {
  const { filter, value } = req.query;

  try {
    const users = await getAllUsersService(filter as string, value as string);
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

export async function getUserById (req: Request, res: Response) {
  return res.status(200).json(req.user);
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  try {
    const newUser = await createUserService(body);
    return res.status(201).json(newUser);
  } catch (error) {
    return next(error);
  }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { body: { data }, body } = req;
    const parsedId = Number(id);
    const updateData = data || body;

    const updatedUser = await updateUserService(parsedId, updateData);
    return res.status(200).json({ message: "User updated", data: updatedUser });
  } catch (error) {
    next(error);
  }
}

export async function updateUserPartial(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { body } = req;
    const parsedId = Number(id);
    const updatedUser = await updateUserService(parsedId, body);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return next(error);
  }
}

export async function deleteUser (req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const parsedId = Number(id);
    
    await deleteUserService(parsedId);
    
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
}