const db = require("../database/db.js")
const generateAccessToken = require("../middleware/generateAccessToken.js")
const login = (req, res) => {
    const { email } = req.body
    db.getConnection((err, connection) => {
        if (err) throw err
        console.log(`login Connection id ${connection.threadId}`)
        connection.release()
        connection.query("SELECT * FROM customers WHERE email=?", [email], async (err, rows) => {
            if (err) throw err
            if (rows.length < 1) return res.status(404).json({ success: false, msg: 'You are not abc customers', })
            const customer = rows[0]
            const userAccessToken = generateAccessToken(customer)
            return res.status(200).json({ success: true, userAccessToken })
        })
    })
}

module.exports = {
    login
}