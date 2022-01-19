const checkCustomer = (req, res, next) => {
    const { email } = req.body
    next()
}

module.exports = checkCustomer