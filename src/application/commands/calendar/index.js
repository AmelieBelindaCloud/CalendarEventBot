const CalendarService = require('../../../adapters/calendar-service')

const InsertEventCommandFactory = require('./insert-event-command')

const event = InsertEventCommandFactory.create({ CalendarService })

const permission = (message) => {
    if(!message.member._roles.includes('697937983503859793')) {
        message.channel.send("Permission denied!")
        return
    }
    message.channel.send(message.author.username + " stinks.")
}

module.exports = Object.freeze({
    event,
    permission
})