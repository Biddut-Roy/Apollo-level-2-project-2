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
  const result = productModel.findById({ _id: id });
  return result;
};

//get a single id by search product info
const updateIdProductDB = (id: string, data: TProduct) => {
  const result = productModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return result;
};

//delete id by product
const deleteIdProductDB = (id: string) => {
  const result = productModel.findByIdAndDelete({ _id: id });
  return result;
};

export const ProductService = {
  createProductDB,
  getProductDB,
  getSingleIdProductDB,
  updateIdProductDB,
  deleteIdProductDB,
};
