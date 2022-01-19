const getCustomers = (req, res)=>{
    return res.status(200).json({ success: true, msg:'route works' })
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