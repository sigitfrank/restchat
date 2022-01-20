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
    const { id } = req.body
    if (!req.file) return res.status(400).json({ success: false, msg: 'Image can not be empty' })
    const imagePath = `assets/${req.file.filename}`
    const date = new Date()
    db.getConnection((err, connection) => {
        if (err) throw err
        connection.release()
        connection.query('INSERT INTO customer_photos (`customer_id`, `picture`, `status`, `created_at`, `updated_at`) VALUES (?,?,?,?,?)', [id, imagePath, true, date, date], function (err, data) {
            if (err) throw err
            const newId = data.insertId
            return res.status(201).json({ success: true, msg: 'Image uploaded', newId })
        })
    })
}

module.exports = {
    getCustomers,
    postCustomerPhoto
}