const { Event } = require('../../../domain/calendar')

module.exports = { create: ({ CalendarService }) => {
    return (command, output) => {

        let event = new Event({
            title: command.getArguments()[1],
            organizer: (command.getCommander().getName()) + " User-ID: " + command.getCommander().getId()
        })

        CalendarService.insertEvent({
            summary: event.getTitle(),
            description: event.getOrganizer()
        })
        .then((response) => {
            if(!response) {
                return
            }
            output.info(response)
        })
        .catch((error) => {
            output.error(error);
        });
    }
}}