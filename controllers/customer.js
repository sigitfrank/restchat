const db = require("../database/db.js")

const getCustomers = (req, res) => {
    db.getConnection((err, connection) => {
        if (err) throw err
        connection.release()
        connection.query('SELECT * FROM `customers` ', function (err, customers) {
            if (err) throw err
            if (customers.length < 1) return res.status(200).json({ success: true, customers: [] })
            return res.status(200).json({ success: true, customers })
        })
    })
}

const postCustomerPhoto = (req, res) => {
    const { customer_id } = req.body
    const image = `assets/${req.file.filename}`
    return res.status(200).json({
        success: true, msg: 'route works', data: {
            customer_id,
            image
        }
    })
}

module.exports = {
    getCustomers,
    postCustomerPhoto
}