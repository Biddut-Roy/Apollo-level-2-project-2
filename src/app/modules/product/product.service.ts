import { productModel } from '../product.model';
import { TProduct } from './product.interface';

const createProductDB = (productInfo: TProduct) => {
  const result = productModel.create(productInfo);
  return result;
};

export const ProductService = {
  createProductDB,
};
