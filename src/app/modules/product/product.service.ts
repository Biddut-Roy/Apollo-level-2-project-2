import { productModel } from '../product.model';
import { TProduct } from './product.interface';
import { productZODtSchema } from './productZOD.validation';

//get all product services
const getProductDB = async (searchTerm?: string) => {
  if (searchTerm) {
    const products = await productModel.find();
    const result = products.filter(
      (product: TProduct) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return result;
  } else {
    const result = productModel.find();
    return result;
  }
};

//create a product services
const createProductDB = async (productInfo: TProduct) => {
  const zodValidationData = productZODtSchema.parse(productInfo);
  const result = await productModel.create(zodValidationData);
  return result;
};

//get a single id by search product info
const getSingleIdProductDB = async (id: string) => {
  const result = await productModel.findById({ _id: id });
  return result;
};

//get a single id by search product info
const updateIdProductDB = async (id: string, data: TProduct) => {
  const result = await productModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return result;
};

//delete id by product
const deleteIdProductDB = async (id: string) => {
  const result = await productModel.findByIdAndDelete({ _id: id });
  return result;
};

export const ProductService = {
  createProductDB,
  getProductDB,
  getSingleIdProductDB,
  updateIdProductDB,
  deleteIdProductDB,
};
