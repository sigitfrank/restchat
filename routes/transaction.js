const express = require('express')
const { postTransaction, getTransactions } = require('../controllers/transaction.js')
const authenticateUser = require('../middleware/authenticateUser.js')
const transactionRouter = express.Router()

transactionRouter.get('/:id',authenticateUser, getTransactions)
transactionRouter.post('/', authenticateUser, postTransaction)


module.exports = transactionRouter