const express = require('express')
const multer = require('multer')
const { getCustomers, postCustomerPhoto } = require('../controllers/customer.js')

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
        const { customer_id } = req.body
        if (!customer_id) return callback(null, false)
        const mimetypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/JPEG', 'image/JPG', 'image/PNG']
        if (!mimetypes.includes(file.mimetype)) return callback(null, false)
        return callback(null, true)
    }
}).single('image')


const customerRouter = express.Router()
customerRouter.get('/', getCustomers)
customerRouter.post('/', upload, postCustomerPhoto)


module.exports = customerRouter