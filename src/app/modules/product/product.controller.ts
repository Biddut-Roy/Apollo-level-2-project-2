import { Request, Response } from 'express';
import { ProductService } from './product.service';

//get all Product Route
const getProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (searchTerm && searchTerm === 'string') {
      const result = await ProductService.getProductDB(searchTerm);
      res.status(200).json({
        success: true,
        message: "Products matching search term 'iphone' fetched successfully!",
        data: result,
      });
    } else {
      // Get all orders
      const result = await ProductService.getProductDB();
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

// create a Product Route
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductService.createProductDB(productData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

// search a single id product
const getSingleIdByProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleIdProductDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

// update a Product
const updateSingleIdByProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await ProductService.updateIdProductDB(
      productId,
      updateData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

// delete a Product
const deleteIdByProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteIdProductDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getProduct,
  getSingleIdByProduct,
  updateSingleIdByProduct,
  deleteIdByProduct,
};
