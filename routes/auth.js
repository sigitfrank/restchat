const express = require('express')
const { login } = require('../controllers/auth.js')
const authRouter = express.Router()

authRouter.post('/', login)


module.exports = authRouter