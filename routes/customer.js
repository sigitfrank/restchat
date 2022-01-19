const express = require('express')
const { getCustomers } = require('../controllers/customer.js')
const customerRouter = express.Router()

customerRouter.get('/', getCustomers)


module.exports = customerRouter