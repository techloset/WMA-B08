
const Product = require('../models/productModel');

const fetchProductController = async (req, res) => {
   try {
    const products = await Product.find();
    res.status(200).json({
        status: 'success',
        message: 'Products fetched successfully',
        data: products
    })
    
   } catch (error) {
    res.json({
        status: 'error',
        message: error.message,
        data: []
    })
   }
  
}


const createProductController= async (req, res) => {
    try {
        console.log('Creating a new product...', req.body);
        // validate product schema
        const product_data = new Product(req.body);
        const result = await product_data.save();
        res.status(201).json({
            status: 'success',
            message: 'Product created successfully',
            data: result
        })


    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
            data: []
        })
    }

}


const updateProductController= async(req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(400).json({ error: 'Product ID is required in path params' });
        }
        // find product by id and update
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({
            status: 'success',
            message: 'Product updated successfully',
            data: updatedProduct
        })      
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
            data: []
        });
    }
}




const deleteProductController = async(req, res) => {
   
  try {
    
     const productId = req.params.id;
    // delete by object id
    if (!productId) {
        return res.status(400).json({ error: 'Product ID is required in path params' });
    }
    const result = await Product.findByIdAndDelete(productId);
    if (!result) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({
        status: 'success',
        message: 'Product deleted successfully',
        data: result
    })
  } catch (error) {
    res.status(500).json({
        status: 'error',
        message: error.message,
        data: []
    })
    
  }
}

module.exports = {
    fetchProductController,
    createProductController,
    updateProductController,
    deleteProductController
}