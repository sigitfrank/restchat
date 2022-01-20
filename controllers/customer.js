const db = require("../database/db.js")

const getCustomerImage = (req, res) => {
    const { customer_id } = req.params
    db.getConnection((err, connection) => {
        if (err) throw err
        connection.release()
        connection.query('SELECT * FROM `customer_photos` WHERE customer_id = ? ', [customer_id], function (err, images) {
            if (err) throw err
            if (images.length < 1) return res.status(200).json({ success: true, image: null })
            return res.status(200).json({ success: true, image: images[0] })
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

const getCustomerVoucher = (req, res) => {
    const { customer_id } = req.params
    db.getConnection((err, connection) => {
        if (err) throw err
        connection.release()
        connection.query('SELECT * FROM `customer_vouchers` WHERE customer_id = ? ', [customer_id], function (err, vouchers) {
            if (err) throw err
            if (vouchers.length < 1) return res.status(200).json({ success: true, voucher: null })
            return res.status(200).json({ success: true, voucher: vouchers[0] })
        })
    })
}

const postCustomerVoucher = (req, res) => {
    const { customer_id } = req.body
    const date = new Date()
    db.getConnection((err, connection) => {
        if (err) throw err
        connection.release()
        connection.query('INSERT INTO customer_vouchers (`customer_id`, `created_at`, `updated_at`) VALUES (?,?,?)', [customer_id, date, date], function (err, data) {
            if (err) throw err
            return res.status(201).json({ success: true, msg: 'Voucher Claimed' })
        })
    })
}

module.exports = {
    getCustomerImage,
    postCustomerPhoto,
    getCustomerVoucher,
    postCustomerVoucher
}