const express = require('express')
const multer = require('multer')
const fs = require('fs')
const { getCustomerImage, postCustomerPhoto, postCustomerVoucher, getCustomerVoucher, getCheckVoucher } = require('../controllers/customer.js')
const authenticateUser = require('../middleware/authenticateUser.js')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const path = './public/assets'
        if (!fs.existsSync(path)) fs.mkdirSync(path)
        callback(null, path)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s/g, ''))
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024, //1mb
    },
    fileFilter: (req, file, callback) => {
        const { id } = req.body
        if (!id) return callback(null, false)
        const mimetypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/JPEG', 'image/JPG', 'image/PNG']
        if (!mimetypes.includes(file.mimetype)) return callback(null, false)
        return callback(null, true)
    }
}).single('image')


const customerRouter = express.Router()
customerRouter.get('/:customer_id', authenticateUser, getCustomerImage)
customerRouter.post('/', [authenticateUser, upload], postCustomerPhoto)
customerRouter.get('/voucher/:customer_id', authenticateUser, getCustomerVoucher)
customerRouter.post('/voucher', authenticateUser, postCustomerVoucher)
customerRouter.get('/voucher/check/status', authenticateUser, getCheckVoucher)


module.exports = customerRouter