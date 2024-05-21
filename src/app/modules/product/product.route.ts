import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.get('/api/products', ProductControllers.getProduct);

router.post('/api/products', ProductControllers.createProduct);

router.get('/api/products/:productId', ProductControllers.getSingleIdByProduct);

router.put('/api/products/:productId', ProductControllers.getSingleIdByProduct);

export const ProductRoutes = router;
