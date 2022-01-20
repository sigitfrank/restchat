const express = require('express')
const { getProducts } = require('../controllers/product.js')
const authenticateUser = require('../middleware/authenticateUser.js')
const productRouter = express.Router()

productRouter.get('/', authenticateUser, getProducts)


module.exports = productRouter