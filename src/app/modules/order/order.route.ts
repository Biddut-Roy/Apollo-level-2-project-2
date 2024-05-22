import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.get('/', OrderControllers.getAllOrder);

router.post('/', OrderControllers.createOrder);

export const OrderRoutes = router;
