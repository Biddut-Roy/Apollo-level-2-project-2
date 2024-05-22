import { orderModel } from '../order.model';
import { productModel } from '../product.model';
import { TOrder } from './order.interface';
import { orderValidationSchema } from './orderZOD.validation';

//get all order services
const getAllOrderDB = async (email?: string) => {
  if (email) {
    // Find orders by email
    const result = await orderModel.find({ email });
    return result;
  } else {
    return await orderModel.find();
  }
};

//create a product services
const createOrderDB = async (orderInfo: TOrder) => {
  const { productId, quantity } = orderInfo;
  const product = await productModel.findById(productId);

  if (!product) {
    throw new Error('Product not found');
  }

  // Check if the ordered quantity exceeds the available quantity
  if (product.inventory.quantity < quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  product.inventory.quantity -= quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  // Save updated product
  await product.save();

  const zodValidationData = orderValidationSchema.parse(orderInfo);
  const result = await orderModel.create(zodValidationData);
  return result;
};

export const OrderServices = {
  createOrderDB,
  getAllOrderDB,
};
