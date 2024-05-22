import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// get a Product Route
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (email && typeof email === 'string') {
      const result = await OrderServices.getAllOrderDB(email);
      if (result.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: 'Product not found' });
      }
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    } else {
      // Get all orders
      const result = await OrderServices.getAllOrderDB();
      if (result.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: 'Order not found' });
      }
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Order not found',
    });
  }
};

// create a Product Route
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrderDB(orderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const OrderControllers = { createOrder, getAllOrder };
