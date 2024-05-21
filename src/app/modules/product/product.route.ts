import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.get('/api/products', ProductControllers.getProduct);
router.post('/api/products', ProductControllers.createProduct);

export const ProductRoutes = router;
