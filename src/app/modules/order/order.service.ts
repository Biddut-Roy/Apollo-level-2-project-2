import { orderModel } from '../order.model';
import { TOrder } from './order.interface';

//get all order services
const getAllOrderDB = (email?: string) => {
  if (email) {
    // Find orders by email if provided
    const result = orderModel.find({ email });
    return result;
  } else {
    // Return all orders if no email is provided
    return orderModel.find();
  }
};

//create a product services
const createOrderDB = (orderInfo: TOrder) => {
  const result = orderModel.create(orderInfo);
  return result;
};

export const OrderServices = {
  createOrderDB,
  getAllOrderDB,
};
