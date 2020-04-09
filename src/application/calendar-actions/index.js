const { CalendarService } = require('../../adapters/calendar-service')

const InsertEventActionFactory = require('./insert-event')

const InsertEventAction = InsertEventActionFactory.create({ CalendarService })


module.exports = Object.freeze({
    InsertEventAction
})