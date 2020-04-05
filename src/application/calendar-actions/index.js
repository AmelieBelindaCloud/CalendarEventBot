const { gmailAccess } = require('./adapters/calendar-access')

const InsertEventActionFactory = require('./insert-event')

const InsertEventAction = InsertEventActionFactory.create({ gmailAccess })


module.exports = Object.freeze({
    InsertEventAction
})