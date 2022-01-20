const morgan = require('morgan')
const morganLogs = ()=>{
    morgan.token('realclfdate', function (req, res) {
        const clfmonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const pad2 = function (num) {
            const str = String(num)
            return (str.length === 1 ? '0' : '') + str
        }
        const dateTime = new Date()
        const date = dateTime.getDate()
        const hour = dateTime.getHours()
        const mins = dateTime.getMinutes()
        const secs = dateTime.getSeconds()
        const year = dateTime.getFullYear()
        let timezoneofset = dateTime.getTimezoneOffset()
        const sign = timezoneofset > 0 ? '-' : '+'
        timezoneofset = parseInt(Math.abs(timezoneofset) / 60)
        const month = clfmonth[dateTime.getUTCMonth()]
        return pad2(date) + '/' + month + '/' + year + ':' + pad2(hour) + ':' + pad2(mins) + ':' + pad2(secs) + ' ' + sign + pad2(timezoneofset) + '00'
    })
}

module.exports = morganLogs