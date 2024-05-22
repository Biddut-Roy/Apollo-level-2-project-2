import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.get('/', ProductControllers.getProduct);

router.post('/', ProductControllers.createProduct);

router.get('/:productId', ProductControllers.getSingleIdByProduct);

router.put('/:productId', ProductControllers.updateSingleIdByProduct);

router.delete('/:productId', ProductControllers.updateSingleIdByProduct);

export const ProductRoutes = router;
