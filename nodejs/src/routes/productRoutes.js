const express = require('express')
const productRouter = express.Router()
const {
  fetchProductController,
  createProductController,
  updateProductController,
  deleteProductController
} = require('../controllers/productController')



productRouter.get('/', fetchProductController)
productRouter.post('/create', createProductController)
productRouter.put('/:id', updateProductController)
productRouter.delete('/:id', deleteProductController)

// export default productRouter
module.exports = productRouter
