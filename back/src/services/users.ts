import { prisma } from "../db/prisma.ts";

export const getAllUsersService = async(filter?: string, value?: string) => {
  if (filter && value) {
    return await prisma.users.findMany({
      where: {
        [filter]: {
          contains: value,
          mode: "insensitive"
        }
      },
      select: { id: true, name: true, email: true, created_at: true }
    })
  }

  return await prisma.users.findMany({
    select: { id: true, name: true, email: true, created_at: true }
  })
}

export const createUserService = async(userData: { name: string; email: string }) => {
  return await prisma.users.create({
    data: userData,
    select: { id: true, name: true, email: true, created_at: true }
  })
}

export const updateUserService = async(id: number, data: any) => {
  return await prisma.users.update({
    where: { id },
    data,
    select: { id: true, name: true, email: true, created_at: true }
  })
}

export const deleteUserService = async(id: number) => {
  return await prisma.users.delete({
    where: { id }
  })
}