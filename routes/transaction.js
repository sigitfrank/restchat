const express = require('express')
const { postTransaction, getTransactions } = require('../controllers/transaction.js')
const transactionRouter = express.Router()

transactionRouter.get('/:id', getTransactions)
transactionRouter.post('/', postTransaction)


module.exports = transactionRouter