import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z.string().email({ message: 'Please use a valid email address.' }),
  productId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, { message: 'Invalid ObjectId format.' }),
  price: z
    .number()
    .min(0, { message: 'Price must be greater than or equal to 0.' }),
  quantity: z.number().min(1, { message: 'Quantity must be at least 1.' }),
});
