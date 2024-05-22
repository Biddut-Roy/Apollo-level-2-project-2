import { Schema, model } from 'mongoose';
import { TOrder } from './order/order.interface';

// Define the Order schema
const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  },
  productId: {
    type: Schema.Types.ObjectId,
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
});

// Create the Order model
export const orderModel = model<TOrder>('Order', orderSchema);
