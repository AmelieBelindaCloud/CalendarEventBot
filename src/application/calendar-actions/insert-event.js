const { Event } = require('../../domain/calendar')

module.exports = { create: ({ CalendarService }) => {
    return class InsertEventAction {
		constructor(eventInfo) {
			const event = new Event(eventInfo)
		
			// validation here
			return event;
			// return CalendarService.insert({
			// 	summary = event.getTitle(),
			// 	location = event.getLocation(),
			// 	description = event.getDescription(),
			// 	colorId = event.getColorId(),
			// 	start = {
			// 		dateTime: event.getStartTime(),
			// 		timeZone: event.getTimeZone(),
			// 	},
			// 	end = {
			// 		dateTime: event.getEndTime(),
			// 		timeZone: event.getTimeZone(),
			// 	}
			// })	
		}
    }
}}