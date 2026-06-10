import { z } from "zod"

export const getProductSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive("Page must be greater than 0").default(1),
    limit: z.coerce.number().int().positive().max(100, "You cannot fetch more than 100 products at a time").default(10),
    search: z.string().optional().default("")
  })
})

export const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(48, "El nombre no puede superar los 48 caracteres"),
    price: z.coerce.number().positive("El precio debe ser mayor a 0"),
    stock: z.coerce.number().int("El stock debe ser un número").positive("El stock no puede ser negativo")
  })
})

export type GetProductsQuery = z.infer<typeof getProductSchema>["query"];
export type CreateProductInput = z.infer<typeof createProductSchema>["body"];