import { productModel } from '../product.model';
import { TProduct } from './product.interface';

const getProductDB = () => {
  const result = productModel.find();
  return result;
};

const createProductDB = (productInfo: TProduct) => {
  const result = productModel.create(productInfo);
  return result;
};

const getSingleIdProductDB = (id: string) => {
  const result = productModel.findById({ id });
  return result;
};

export const ProductService = {
  createProductDB,
  getProductDB,
  getSingleIdProductDB,
};
