import { orderModel } from '../order.model';
import { TOrder } from './order.interface';

//get all order services
const getAllOrderDB = async (email?: string) => {
  if (email) {
    // Find orders by email if provided
    const result = await orderModel.find({ email });
    return result;
  } else {
    // Return all orders if no email is provided
    return await orderModel.find();
  }
};

//create a product services
const createOrderDB = async (orderInfo: TOrder) => {
  const result = await orderModel.create(orderInfo);
  return result;
};

export const OrderServices = {
  createOrderDB,
  getAllOrderDB,
};
