const express = require('express')
const { getProducts } = require('../controllers/product.js')
const productRouter = express.Router()

productRouter.get('/', getProducts)


module.exports = productRouter