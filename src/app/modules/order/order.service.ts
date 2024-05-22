import { orderModel } from '../order.model';
import { TOrder } from './order.interface';

//get all order services
const getAllOrderDB = () => {
  const result = orderModel.find();
  return result;
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
