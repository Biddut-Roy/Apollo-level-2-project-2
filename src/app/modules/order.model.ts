import { Schema, model } from 'mongoose';
import { TOrder } from './order/order.interface';

// Define the Order schema
const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

// Create the Order model
export const orderModel = model<TOrder>('Order', orderSchema);
