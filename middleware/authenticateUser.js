const jwt = require('jsonwebtoken')
function authenticateUser(req, res, next) {
    const authHeader = req.headers['authorization']
    if(!authHeader) return res.status(401).json({ access: false, msg:'Header authorization is not provided' })
    const token = authHeader.split(' ')[1]
    if (!token) return res.status(401).json({ access: false,msg:'Token not provided' })
    jwt.verify(token, process.env.SERVER_KEY, (err, user) => {
        if (err) return res.status(403).json({ access: false })
        next()
    })
}

module.exports = authenticateUser