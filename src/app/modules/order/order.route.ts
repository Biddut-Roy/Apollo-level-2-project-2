import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/api/orders', OrderControllers.createProduct);

export const OrderRoutes = router;
