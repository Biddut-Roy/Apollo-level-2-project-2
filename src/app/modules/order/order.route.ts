import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.get('/api/orders', OrderControllers.getAllOrder);

router.post('/api/orders', OrderControllers.createOrder);

export const OrderRoutes = router;
