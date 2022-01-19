const db = require("../database/db.js")

const getCustomers = (req, res)=>{
    db.getConnection((err, connection) => {
        if (err) throw err
        connection.release()
        connection.query('SELECT * FROM `customers` ', function (err, customers) {
            if (err) throw err
            if (customers.length < 1) return res.status(200).json({ success: true, customers:[]})
            return res.status(200).json({ success: true, customers })
        })
    })
}

const attemptVoucher = (req, res)=>{
    return res.status(200).json({ success: true, msg:'route works' })
}
const uploadPhoto = (req, res)=>{
    return res.status(200).json({ success: true, msg:'route works' })
}

module.exports = {
    getCustomers,
    attemptVoucher,
    uploadPhoto
}