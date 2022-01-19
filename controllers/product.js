const db = require("../database/db.js")

const getProducts = (req, res)=>{
    db.getConnection((err, connection) => {
        if (err) throw err
        connection.release()
        connection.query('SELECT * FROM `products` ', function (err, products) {
            if (err) throw err
            if (products.length < 1) return res.status(200).json({ success: true, products:[]})
            return res.status(200).json({ success: true, products })
        })
    })
}

module.exports = {
    getProducts,
}