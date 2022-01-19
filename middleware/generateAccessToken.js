const jwt = require('jsonwebtoken')
function generateAccessToken(customer) {
    return jwt.sign(customer, process.env.SERVER_KEY, { expiresIn: '14400s' })
}

module.exports = generateAccessToken