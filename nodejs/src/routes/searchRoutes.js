const express = require('express')
const searchRouter= express.Router()

const { searchProductController } = require('../controllers/searchController')


searchRouter.get("/products", searchProductController)

module.exports = searchRouter
