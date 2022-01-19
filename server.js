const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const customerRouter = require('./routes/customer')
const app = express()
app.set('trust proxy', 1)
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.use('/api/v1/customer', customerRouter)

app.use(function(req, res, next) {
    return res.status(404).json({ error: 'Routes Not found' })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})