const CalendarService = require('../../../adapters/calendar-service')
const ChatService = require('../../../adapters/chat-service')

const InsertEventCommandFactory = require('./insert-event-command')

const einsert = InsertEventCommandFactory.create({ CalendarService, ChatService })

module.exports = Object.freeze({
    einsert
})