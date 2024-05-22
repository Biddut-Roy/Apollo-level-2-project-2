import { z } from 'zod';

// Define the Zod schema for TVariant
const variantSchema = z.object({
  type: z.string().nonempty({ message: 'Type is required.' }),
  value: z.string().nonempty({ message: 'Value is required.' }),
});

// Define the Zod schema for TInventory
const inventorySchema = z.object({
  quantity: z
    .number()
    .nonnegative({ message: 'Quantity must be a non-negative number.' }),
  inStock: z.boolean({ message: 'InStock must be a boolean.' }),
});

// Define the Zod schema for TProduct
export const productZODtSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required.' }),
  description: z.string().nonempty({ message: 'Description is required.' }),
  price: z
    .number()
    .nonnegative({ message: 'Price must be a non-negative number.' }),
  category: z.string().nonempty({ message: 'Category is required.' }),
  tags: z.array(
    z.string().nonempty({ message: 'Tags must be non-empty strings.' }),
  ),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});
