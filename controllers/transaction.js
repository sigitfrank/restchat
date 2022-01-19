const db = require("../database/db.js")

const getTransactions = (req, res) => {
    const { id } = req.params
    db.getConnection((err, connection) => {
        if (err) throw err
        connection.release()
        connection.query('SELECT * FROM purchase_transactions WHERE customer_id=?', [id], function (err, transactions) {
            if (err) throw err
            const totalTransaction = transactions.length
            const totalSpent = transactions.map(transaction => +transaction.total_spent).reduce((accumulator, item) => {
                return accumulator + item
              }, 0)
            return res.status(200).json({ success: true, transactions, totalTransaction, totalSpent })
        })
    })
}

const postTransaction = (req, res) => {
    const { id, price } = req.body
    db.getConnection((err, connection) => {
        if (err) throw err
        connection.release()
        const date = new Date()
        connection.query('INSERT INTO purchase_transactions (`customer_id`, `total_spent`, `total_saving`, `transaction_at`, `created_at`, `updated_at`) VALUES (?,?,?,?,?,?)', [id, price, 20, date, date, date], function (err, transaction) {
            const newTransaction = {
                id: transaction.insertId,
                total_spent: +price + '.00',
                total_saving: '20.00',
                transaction_at: date,
            }
            if (err) throw err
            return res.status(200).json({ success: true, newTransaction })
        })
    })
}

module.exports = {
    postTransaction,
    getTransactions
}