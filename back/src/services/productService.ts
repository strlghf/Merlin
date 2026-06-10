import { prisma } from "../db/prisma";

export const getProductsService = async(page: number, limit: number, search: string) => {
  const skip = (page - 1) * limit;

  const whereFilter = search
  ? {
    name: {
      contains: search,
      mode: "insensitive" as const
    }
  } : {};

  const [products, totalCount] = await prisma.$transaction([
    prisma.products.findMany({
      skip,
      take: limit,
      where: whereFilter,
      orderBy: { created_at: "desc" }
    }),
    prisma.products.count({
      where: whereFilter
    })
  ])

  return { products, totalCount }
}