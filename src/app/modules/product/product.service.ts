import { productModel } from '../product.model';
import { TProduct } from './product.interface';

//get all product services
const getProductDB = () => {
  const result = productModel.find();
  return result;
};

//create a product services
const createProductDB = (productInfo: TProduct) => {
  const result = productModel.create(productInfo);
  return result;
};

//get a single id by search product info
const getSingleIdProductDB = (id: string) => {
  const result = productModel.findById({ id });
  return result;
};

export const ProductService = {
  createProductDB,
  getProductDB,
  getSingleIdProductDB,
};
