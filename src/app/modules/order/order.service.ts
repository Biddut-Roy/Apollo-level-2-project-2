import { orderModel } from '../order.model';
import { TOrder } from './order.interface';

//create a product services
const createOrderDB = (orderInfo: TOrder) => {
  const result = orderModel.create(orderInfo);
  return result;
};

export const OrderServices = {
  createOrderDB,
};
