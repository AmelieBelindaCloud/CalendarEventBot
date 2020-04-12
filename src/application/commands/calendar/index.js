const CalendarService = require('../../../adapters/calendar-service')

const InsertEventCommandFactory = require('./insert-event-command')

const einsert = InsertEventCommandFactory.create({ CalendarService })

module.exports = Object.freeze({
    einsert
})