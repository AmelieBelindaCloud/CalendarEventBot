//const gmail = require('./interfaces/gmail')
//const Discord = require('./interfaces/discord')
//const { gmailAccess } = require('./adapters/calendar-access')

//const { InsertEvent } = require('./application/calendar-actions')

InsertEvent.execute({
    summary = "Meeting with David",
    location = "3595 California St, San Francisco, CA 94118",
    description = "Meet with David to talk about the new client project and how to integrate the calendar for booking.",
    colorId = 1,
    start = {
        dateTime: defaultEventStartTime,
        timeZone: 'America/Denver',
    },
    end = {
        dateTime: defaultEventEndTime,
        timeZone: 'America/Denver',
    }
})

//const { Event } = require('./domain/calendar')

//let event = new Event()
//console.log(event)