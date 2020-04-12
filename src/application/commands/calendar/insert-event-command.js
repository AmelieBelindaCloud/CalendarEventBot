const { Event } = require('../../../domain/calendar')

module.exports = { create: ({ CalendarService, ChatService }) => {
    return (message, args) => {
        message.channel.send("Create event.")

        let event = new Event({
            title: args[1],
            organizer: (args[2] || message.author.username) + " User-ID: " + message.author.id
        })

        CalendarService.insertEvent({
            summary: event.getTitle(),
            description: event.getOrganizer()
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error);
        });
    }
}}