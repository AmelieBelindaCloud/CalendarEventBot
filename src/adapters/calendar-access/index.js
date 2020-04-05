const gmailCalendar = require('../../interfaces/gmail')
const GmailAccess = require('./gmail-access')

const { calendar_id } = require('../../interfaces/gmail/config.json')

const gmailAccess = GmailAccess.create({ 
    gmailCalendar, 
    calendar_id
 })


module.exports = { gmailAccess }