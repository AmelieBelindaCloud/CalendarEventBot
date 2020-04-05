const { Event } = require('../../domain/calendar')

module.exports = { create: ({ CalendarAccess }) => {
    return class InsertEventAction {
		constructor(eventInfo) {
			const event = new Event(eventInfo)
		
			// validation here
	
			return CalendarAccess.insert({
				summary = event.getTitle(),
				location = event.getLocation(),
				description = event.getDescription(),
				colorId = event.getColorId(),
				start = {
					dateTime: event.getStartTime(),
					timeZone: event.getTimeZone(),
				},
				end = {
					dateTime: event.getEndTime(),
					timeZone: event.getTimeZone(),
				}
			})	
		}
    }
}