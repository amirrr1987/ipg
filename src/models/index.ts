import * as z from 'zod'

export const ProductSchema = z
  .object({
    _id: z.number().readonly(),
    label: z.string(),
    price: z.number().nonnegative(),
    count: z.number().int().nonnegative()
  })
  .strict()

export type IProduct = z.infer<typeof ProductSchema>
